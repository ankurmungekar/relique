# 📧 Contact Form - Production Ready

## ✅ What's Working

Your contact form is fully functional and sends emails to:
- ✉️ ankurmungekarstorage@gmail.com
- ✉️ reachus@reliqueconsultants.com

## 📁 Production Files

### Backend (PHP)
```
public/api/
├── contact.php              ← Form submission handler (SMTP)
├── email-template.html      ← HTML email template
├── smtp-config.php          ← Gmail SMTP credentials
├── .htaccess               ← Security configuration
├── .gitignore              ← Protects sensitive files
└── README.md               ← API documentation
```

### Frontend (React)
```
src/pages/ContactPage.tsx    ← Contact form component
src/components/ui/Button.tsx ← Button with disabled state
```

## 🚀 How It Works

1. User fills out contact form on website
2. React submits data to `/api/contact.php`
3. PHP validates the data
4. Sends email via Gmail SMTP (using App Password)
5. Both recipients receive beautiful HTML email
6. Submission is logged to `contact-submissions.log`

## 🔐 SMTP Configuration (Gmail)

Using Gmail SMTP with App Password:
- **Server:** smtp.gmail.com
- **Port:** 465 (SSL)
- **Authentication:** App Password (16 characters)
- **Cost:** FREE forever (500 emails/day)

## 📝 Important Files

**Keep these secure and never commit to Git:**
- `smtp-config.php` - Contains your Gmail App Password
- `contact-submissions.log` - Contains form submissions

Both are protected by `.htaccess` and `.gitignore`.

## 🛠️ Maintenance

### View Form Submissions
```bash
tail -f public/api/contact-submissions.log
```

### If Emails Stop Working

1. Check if App Password is still valid: https://myaccount.google.com/apppasswords
2. Generate new App Password if needed
3. Update `smtp-config.php` with new password
4. Upload to server

### Generate New App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Create new password (name it: `Relique Contact Form`)
3. Copy the 16-character password (remove spaces)
4. Update in `smtp-config.php`:
   ```php
   define('SMTP_PASSWORD', 'your16charpassword');
   ```
5. Upload to server

## 📊 Monitoring

All form submissions are logged with:
- Timestamp
- Sender name and email
- Subject type
- SMTP status (successful/failed)

## 🔧 Troubleshooting

### Form submits but no emails received

1. Check spam folders
2. Verify App Password hasn't expired
3. Check submission log for errors
4. Ensure 2-Step Verification is still ON

### "Authentication failed" error

1. Generate a NEW App Password
2. Make sure it's exactly 16 characters with NO spaces
3. Update smtp-config.php
4. Upload to server

### Need to change email addresses

Edit `contact.php` line ~105:
```php
$recipients = [
    'newemail1@example.com',
    'newemail2@example.com'
];
```

## 📚 Documentation

- `GMAIL_SMTP_SETUP.md` - Gmail setup instructions
- `DEPLOYMENT.md` - Full deployment guide
- `public/api/README.md` - API documentation

---

**Status:** ✅ Production Ready & Working
**Last Updated:** October 7, 2025
**Email Service:** Gmail SMTP (Free)
