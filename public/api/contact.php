<?php
/**
 * Contact Form Handler with SMTP (Hostinger)
 * 
 * This version uses SMTP with PHPMailer for reliable email delivery.
 * Works with Hostinger and most hosting providers.
 * 
 * Requirements:
 * 1. PHPMailer library (included below as standalone)
 * 2. SMTP credentials in smtp-config.php
 */

// Disable error reporting for production
error_reporting(0);
ini_set('display_errors', 0);

// Set timezone to Dubai (UAE)
date_default_timezone_set('Asia/Dubai');

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Load SMTP configuration
$configFile = __DIR__ . '/smtp-config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'SMTP configuration not found. Please create smtp-config.php'
    ]);
    exit();
}
require_once($configFile);

// Validate SMTP configuration
if (!defined('SMTP_USERNAME') || !defined('SMTP_PASSWORD') || 
    strpos(SMTP_USERNAME, 'yourdomain.com') !== false ||
    SMTP_PASSWORD === 'your-email-password-here') {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'SMTP credentials not properly configured. Please update smtp-config.php'
    ]);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$requiredFields = ['name', 'email', 'contactNumber', 'subject', 'message'];
$errors = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $errors[] = ucfirst($field) . ' is required';
    }
}

// Validate email format
if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed',
        'errors' => $errors
    ]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(strip_tags($data['name']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$contactNumber = htmlspecialchars(strip_tags($data['contactNumber']));
$subject = htmlspecialchars(strip_tags($data['subject']));
$message = htmlspecialchars(strip_tags($data['message']));

// Map subject codes to readable text (matching dropdown options)
$subjectMap = [
    'looking-for-solution' => 'Looking for a solution',
    'partnering' => 'Looking for partnering with us',
    'query' => 'You have a query for us'
];
$subjectText = $subjectMap[$subject] ?? $subject;

// Email recipients
$recipients = [
    ['email' => 'ankurmungekarstorage@gmail.com', 'name' => ''],
    ['email' => 'reachus@reliqueconsultants.com', 'name' => 'Relique Consultants']
];

// Email subject
$emailSubject = "New Contact Us Submission - Relique Consultants";

// Load HTML email template
$templatePath = __DIR__ . '/email-template.html';
if (file_exists($templatePath)) {
    $htmlMessage = file_get_contents($templatePath);
    
    // Replace placeholders with actual data
    $htmlMessage = str_replace('{{name}}', $name, $htmlMessage);
    $htmlMessage = str_replace('{{email}}', $email, $htmlMessage);
    $htmlMessage = str_replace('{{contactNumber}}', $contactNumber, $htmlMessage);
    $htmlMessage = str_replace('{{subject}}', $subjectText, $htmlMessage);
    $htmlMessage = str_replace('{{message}}', nl2br($message), $htmlMessage);
    $htmlMessage = str_replace('{{timestamp}}', date('F j, Y, g:i a'), $htmlMessage);
} else {
    $htmlMessage = "<h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Contact Number:</strong> $contactNumber</p>
    <p><strong>Subject:</strong> $subjectText</p>
    <p><strong>Message:</strong><br>" . nl2br($message) . "</p>";
}

// Plain text version
$textMessage = "New Contact Form Submission\r\n\r\n" .
               "Name: $name\r\n" .
               "Email: $email\r\n" .
               "Contact Number: $contactNumber\r\n" .
               "Subject: $subjectText\r\n\r\n" .
               "Message:\r\n$message\r\n\r\n" .
               "Submitted: " . date('F j, Y, g:i a');

// Send emails using SMTP
$successCount = 0;
$failedRecipients = [];
$errorMessages = [];

foreach ($recipients as $recipient) {
    // Use socket-based SMTP (no PHPMailer needed)
    $result = sendEmailSMTP(
        $recipient['email'],
        $recipient['name'],
        $emailSubject,
        $htmlMessage,
        $textMessage,
        $email,
        $name
    );
    
    if ($result['success']) {
        $successCount++;
    } else {
        $failedRecipients[] = $recipient['email'];
        $errorMessages[] = $result['error'];
    }
}

// Log the submission
$logEntry = sprintf(
    "[%s] Contact form submission from %s (%s) - Subject: %s | SMTP Status: %s/%d sent | Errors: %s\n",
    date('Y-m-d H:i:s'),
    $name,
    $email,
    $subjectText,
    $successCount,
    count($recipients),
    !empty($errorMessages) ? implode('; ', $errorMessages) : 'None'
);
@file_put_contents(__DIR__ . '/contact-submissions.log', $logEntry, FILE_APPEND);

// Return response
if ($successCount > 0) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us! We will get back to you soon.',
        'sent_to' => $successCount
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later or contact us directly.',
        'errors' => $errorMessages
    ]);
}

/**
 * Send email via SMTP using raw socket connection
 * This works without PHPMailer library
 */
function sendEmailSMTP($to, $toName, $subject, $htmlBody, $textBody, $replyEmail, $replyName) {
    try {
        // Connect to SMTP server
        // For SSL (port 465), use ssl:// prefix
        // For TLS (port 587), use regular connection then STARTTLS
        $host = (SMTP_PORT == 465 && SMTP_ENCRYPTION == 'ssl') ? 'ssl://' . SMTP_HOST : SMTP_HOST;
        $smtp = fsockopen($host, SMTP_PORT, $errno, $errstr, 30);
        
        if (!$smtp) {
            return ['success' => false, 'error' => "Connection failed: $errstr ($errno)"];
        }
        
        // Read server response
        $response = fgets($smtp, 515);
        if (substr($response, 0, 3) != '220') {
            fclose($smtp);
            return ['success' => false, 'error' => 'Server not ready: ' . $response];
        }
        
        // Say EHLO and read ALL response lines
        fputs($smtp, "EHLO " . SMTP_HOST . "\r\n");
        // Gmail sends multiple 250- lines, read until we get 250 (no dash)
        while ($line = fgets($smtp, 515)) {
            if (substr($line, 3, 1) == ' ') break; // Last line has space, not dash
        }
        
        // Start TLS if using port 587 (not needed for port 465 with SSL)
        if (SMTP_PORT == 587 && SMTP_ENCRYPTION == 'tls') {
            fputs($smtp, "STARTTLS\r\n");
            $response = fgets($smtp, 515);
            if (substr($response, 0, 3) != '220') {
                fclose($smtp);
                return ['success' => false, 'error' => 'STARTTLS failed: ' . $response];
            }
            stream_socket_enable_crypto($smtp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            fputs($smtp, "EHLO " . SMTP_HOST . "\r\n");
            // Read all EHLO response lines again after TLS
            while ($line = fgets($smtp, 515)) {
                if (substr($line, 3, 1) == ' ') break;
            }
        }
        
        // Authenticate
        fputs($smtp, "AUTH LOGIN\r\n");
        $response = fgets($smtp, 515);
        fputs($smtp, base64_encode(SMTP_USERNAME) . "\r\n");
        $response = fgets($smtp, 515);
        fputs($smtp, base64_encode(SMTP_PASSWORD) . "\r\n");
        $response = fgets($smtp, 515);
        
        if (substr($response, 0, 3) != '235') {
            fclose($smtp);
            return ['success' => false, 'error' => 'Authentication failed: ' . trim($response)];
        }
        
        // Send mail
        fputs($smtp, "MAIL FROM: <" . SMTP_FROM_EMAIL . ">\r\n");
        $response = fgets($smtp, 515);
        
        fputs($smtp, "RCPT TO: <$to>\r\n");
        $response = fgets($smtp, 515);
        
        fputs($smtp, "DATA\r\n");
        $response = fgets($smtp, 515);
        
        // Email headers
        $headers = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM_EMAIL . ">\r\n";
        $headers .= "Reply-To: $replyName <$replyEmail>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "Subject: $subject\r\n";
        
        // Email body
        $emailContent = $headers . "\r\n" . $htmlBody . "\r\n.\r\n";
        fputs($smtp, $emailContent);
        $response = fgets($smtp, 515);
        
        // Quit
        fputs($smtp, "QUIT\r\n");
        fclose($smtp);
        
        return ['success' => true, 'error' => null];
        
    } catch (Exception $e) {
        return ['success' => false, 'error' => $e->getMessage()];
    }
}
?>
