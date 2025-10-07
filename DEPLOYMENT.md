# 🚀 Deployment Guide - Contact Form

## Quick Deployment Checklist

- [ ] Upload all files to hosting server
- [ ] Set correct file permissions
- [ ] Test contact form
- [ ] Verify emails are being sent
- [ ] Monitor submission logs

## File Permissions

After uploading, set these permissions on your server:

```bash
chmod 755 public/api
chmod 644 public/api/contact.php
chmod 644 public/api/email-template.html
chmod 644 public/api/.htaccess
chmod 666 public/api/contact-submissions.log
```

Or create the log file if it doesn't exist:

```bash
touch public/api/contact-submissions.log
chmod 666 public/api/contact-submissions.log
```

## Server Requirements

- **PHP:** 7.4 or higher
- **Web Server:** Apache (with mod_php) or Nginx (with PHP-FPM)
- **Mail:** PHP mail() function enabled OR SMTP configured

## Testing on Hosting Server

### 1. Build and Deploy

```bash
# Build the React app
npm run build

# Upload the build folder to your hosting server
# Make sure public/api folder is also uploaded
```

### 2. Test the Contact Form

Visit your deployed site and go to the Contact page:
```
https://your-domain.com/contact
```

Fill out and submit the form.

### 3. Verify Emails

Check both email addresses:
- ankurmungekarstorage@gmail.com
- reachus@reliqueconsultants.com

### 4. Check Submission Log

SSH into your server and check:
```bash
tail -f /path/to/public/api/contact-submissions.log
```

## Email Configuration

### Option 1: Use Server's Built-in Mail (Default)

Most hosting providers have mail configured. The current setup uses PHP's `mail()` function which should work out of the box.

### Option 2: Configure SMTP (Recommended for Better Deliverability)

If emails aren't being sent, you may need to configure SMTP. Contact your hosting provider for SMTP settings.

## Netlify Deployment

If deploying to Netlify, note that **PHP is not supported**. You'll need to either:

1. **Use Netlify Functions** (serverless)
2. **Use a third-party form service** (Formspree, Getform, etc.)
3. **Host the PHP backend separately** and update the API endpoint

### Quick Fix for Netlify - Use Netlify Forms:

Update `ContactPage.tsx`:

```typescript
// Add to form element
<form 
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form */}
</form>
```

Add to `public/index.html`:

```html
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="tel" name="contactNumber" />
  <select name="subject">
    <option value="looking-for-solution">Looking for solution</option>
    <option value="partnering">Partnering</option>
    <option value="query">Query</option>
  </select>
  <textarea name="message"></textarea>
</form>
```

## Troubleshooting

### Emails Not Being Sent

1. **Check PHP mail configuration:**
   ```bash
   php -i | grep mail
   ```

2. **Check server mail logs:**
   ```bash
   tail -f /var/log/mail.log
   ```

3. **Verify submission log shows entries:**
   ```bash
   cat /path/to/public/api/contact-submissions.log
   ```

4. **Contact your hosting provider** about SMTP configuration

### 403 Forbidden Error

Check file permissions:
```bash
chmod 644 public/api/contact.php
```

### 500 Internal Server Error

1. Check PHP error logs on your server
2. Verify PHP version is 7.4+
3. Ensure all required PHP extensions are installed

### CORS Errors

1. Ensure `.htaccess` is uploaded
2. Verify `mod_headers` is enabled on Apache
3. Check that CORS headers are present in the response

## Email Deliverability Tips

To avoid emails going to spam:

1. **SPF Records:** Configure SPF for your domain
2. **DKIM:** Set up DKIM authentication
3. **From Address:** Use a domain-matching email
4. **Test:** Use mail-tester.com to check email quality

## Monitoring

### View Recent Submissions

```bash
tail -20 /path/to/public/api/contact-submissions.log
```

### Monitor in Real-time

```bash
tail -f /path/to/public/api/contact-submissions.log
```

### Count Total Submissions

```bash
wc -l /path/to/public/api/contact-submissions.log
```

## Support

If you encounter issues:

1. Check the submission log file first
2. Review your hosting provider's PHP documentation
3. Contact hosting support for mail configuration help

---

**Email Recipients:**
- ankurmungekarstorage@gmail.com
- reachus@reliqueconsultants.com

**Contact Form Endpoint:** `/api/contact.php`
