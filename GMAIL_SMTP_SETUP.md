# 📧 Gmail SMTP Setup Guide (FREE Forever)

Since your Hostinger plan doesn't include email, use Gmail SMTP instead - it's **100% free** and works perfectly!

## ⚡ Quick Setup (5 minutes)

### Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com
2. Click **"Security"** in the left sidebar
3. Under **"How you sign in to Google"**, click **"2-Step Verification"**
4. Follow the prompts to enable it (usually verify with phone)

### Step 2: Generate App Password

1. After enabling 2-Step Verification, go to: https://myaccount.google.com/apppasswords
2. In the **"Select app"** dropdown, choose **"Mail"**
3. In the **"Select device"** dropdown, choose **"Other (Custom name)"**
4. Type: `Relique Contact Form`
5. Click **"Generate"**
6. **COPY THE 16-DIGIT PASSWORD** (shown without spaces)
   - Example: `abcd efgh ijkl mnop`
   - You'll use: `abcdefghijklmnop`

### Step 3: Update smtp-config.php

Open `public/api/smtp-config.php` and update:

```php
// Gmail SMTP Settings
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_ENCRYPTION', 'tls');

// Your Gmail Credentials
define('SMTP_USERNAME', 'ankurmungekarstorage@gmail.com');
define('SMTP_PASSWORD', 'abcdefghijklmnop'); // ← Your 16-digit App Password

// From Address
define('SMTP_FROM_EMAIL', 'ankurmungekarstorage@gmail.com');
define('SMTP_FROM_NAME', 'Relique Consultants');
```

### Step 4: Upload Files

Upload to your server:
- `public/api/contact.php` (already renamed)
- `public/api/smtp-config.php` (with your App Password)
- `public/api/email-template.html`
- `public/api/.htaccess`

### Step 5: Test!

1. Submit your contact form
2. Check **ankurmungekarstorage@gmail.com**
3. Check **reachus@reliqueconsultants.com**
4. Both should receive emails! 🎉

## 📹 Video Guide (If Needed)

If you need visual help:
1. Search YouTube for: "How to create Gmail App Password"
2. Or follow: https://support.google.com/accounts/answer/185833

## Important Notes

### ✅ This is 100% FREE
- Gmail allows 500 emails per day (more than enough for contact forms)
- No expiration
- No credit card needed
- Included with your Gmail account

### ⚠️ Use App Password, NOT Regular Password
- **Never** use your regular Gmail password
- **Always** use the 16-digit App Password
- More secure and works with applications

### 📧 Emails Will Show "via gmail.com"
Recipients will see:
```
From: Relique Consultants <ankurmungekarstorage@gmail.com>
via gmail.com
```

This is normal and perfectly fine for contact forms!

## Troubleshooting

### Can't Find App Passwords Option?

**Reason:** 2-Step Verification not enabled

**Solution:**
1. Go to: https://myaccount.google.com/security
2. Enable **"2-Step Verification"** first
3. Then App Passwords option will appear

### Error: "Username and Password not accepted"

**Solutions:**
- Make sure you're using the **App Password**, not your regular Gmail password
- Remove any spaces from the App Password
- Generate a new App Password and try again
- Check username is the full email: `ankurmungekarstorage@gmail.com`

### Error: "SMTP connection failed"

**Solutions:**
- Check SMTP settings are correct:
  - Host: `smtp.gmail.com`
  - Port: `587`
  - Encryption: `tls`
- Make sure your server allows outgoing connections to Gmail
- Try port `465` with `ssl` encryption instead

### Gmail is Blocking Sign-In Attempt

**Solution:**
1. Use App Password (not regular password)
2. Check: https://myaccount.google.com/lesssecureapps (should be OFF)
3. Allow the app: https://accounts.google.com/DisplayUnlockCaptcha

## Alternative: Use Your Other Email

If you want to send FROM reachus@reliqueconsultants.com instead:

### Option 1: Forward to Gmail
1. Set up email forwarding from your domain to Gmail
2. Add as "Send mail as" in Gmail settings
3. Use Gmail SMTP with that address

### Option 2: Purchase Hostinger Email
- Usually $0.99/month or included in higher plans
- Then use Hostinger SMTP settings from previous guide

### Option 3: Use Free Email Provider
- Create free email at Zoho Mail, ProtonMail, etc.
- Use their SMTP settings

## Gmail SMTP Limits

**Free Gmail Account:**
- 500 emails per day
- 500 recipients per email
- More than enough for contact forms!

**If you need more:**
- Upgrade to Google Workspace (paid)
- Or use Hostinger email hosting

## Security Best Practices

✅ **DO:**
- Use App Passwords (16 digits)
- Keep smtp-config.php secure (protected by .htaccess)
- Don't commit smtp-config.php to Git
- Revoke App Password if compromised

❌ **DON'T:**
- Use your regular Gmail password
- Share your App Password
- Commit credentials to version control

## Quick Reference

**Gmail SMTP Settings:**
```
Host: smtp.gmail.com
Port: 587 (TLS) or 465 (SSL)
Encryption: tls or ssl
Username: your-gmail@gmail.com
Password: 16-digit App Password
```

---

**Next Step:** Generate your App Password and update smtp-config.php! 🚀

**Free:** ✅ Forever  
**Reliable:** ✅ Google's infrastructure  
**Easy:** ✅ 5-minute setup
