# Contact Form API

This directory contains the PHP backend for the Relique Consultants contact form.

## Files

- **contact.php** - Main form submission handler
- **email-template.html** - HTML email template for notifications
- **.htaccess** - Apache configuration
- **contact-submissions.log** - Log file for all submissions (auto-created)

## API Endpoint

**POST** `/api/contact.php`

### Request Body (JSON)

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "contactNumber": "+1234567890",
  "subject": "looking-for-solution",
  "message": "I need help with..."
}
```

### Subject Options

- `looking-for-solution` - Are you looking for a solution
- `partnering` - Looking for partnering with us
- `query` - You have a query for us

### Response

**Success (200)**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "sent_to": 2
}
```

**Error (400/500)**
```json
{
  "success": false,
  "message": "Error message here",
  "errors": ["Field is required", ...]
}
```

## Email Recipients

Emails are sent to:
- ankurmungekarstorage@gmail.com
- reachus@reliqueconsultants.com

## Deployment

### Requirements
- PHP 7.4+ with mail support
- Apache or Nginx
- Mail transfer agent configured

### File Permissions

```bash
chmod 755 public/api
chmod 644 public/api/contact.php
chmod 644 public/api/email-template.html
chmod 644 public/api/.htaccess
chmod 666 public/api/contact-submissions.log
```

### Server Configuration

**Apache:** Ensure `mod_php` is installed and enabled

**Nginx:** Configure PHP-FPM:
```nginx
location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    fastcgi_index index.php;
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
}
```

## Monitoring

### Check Submissions Log
```bash
tail -f public/api/contact-submissions.log
```

### Recent Submissions
```bash
tail -20 public/api/contact-submissions.log
```

### Count Total Submissions
```bash
wc -l public/api/contact-submissions.log
```

## Security Features

- Input validation and sanitization
- Email format validation
- HTML tag stripping
- Protected log files (.htaccess)
- CORS configuration
- Type checking

## Troubleshooting

### Issue: Emails not being sent

Check:
1. PHP mail configuration: `php -i | grep mail`
2. Server mail logs: `/var/log/mail.log`
3. contact-submissions.log to verify submissions are received
4. SMTP/sendmail is properly configured on server

### Issue: Permission errors

```bash
chmod 666 public/api/contact-submissions.log
chown www-data:www-data public/api/contact-submissions.log
```

### Issue: CORS errors

Check `.htaccess` configuration and ensure `mod_headers` is enabled.

---

**For support, contact:** reachus@reliqueconsultants.com