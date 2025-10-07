# Relique Consultants Website

Corporate website for Relique Consultants with contact form functionality.

## 🚀 Quick Start

### Development
```bash
npm install
npm start
```

Visit: http://localhost:3000

### Production Build
```bash
npm run build
```

Upload the `build` folder to your hosting server.

## 📁 Project Structure

```
Relique/
├── src/                    # React source code
│   ├── pages/             # Page components (Home, About, Contact, etc.)
│   ├── components/        # Reusable components
│   └── assets/           # Images and static assets
├── public/
│   ├── api/              # PHP backend for contact form
│   └── images/           # Public images
├── build/                # Production build (generated)
└── docs/                 # Documentation
```

## ✨ Features

- 🎨 Modern, responsive design
- 📧 Working contact form with email notifications
- 🔒 Secure form submission with SMTP
- 📱 Mobile-friendly
- ⚡ Fast and optimized

## 📧 Contact Form

The contact form uses PHP backend with Gmail SMTP to send emails.

**Recipients:**
- ankurmungekarstorage@gmail.com
- reachus@reliqueconsultants.com

**Setup Documentation:**
- See `CONTACT_FORM_SETUP.md` for complete details
- See `GMAIL_SMTP_SETUP.md` for Gmail configuration

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, TailwindCSS
- **Routing:** React Router
- **Backend:** PHP (contact form)
- **Email:** Gmail SMTP
- **Hosting:** Hostinger

## 📚 Documentation

- `CONTACT_FORM_SETUP.md` - Contact form documentation
- `GMAIL_SMTP_SETUP.md` - Gmail SMTP setup guide
- `DEPLOYMENT.md` - Deployment instructions
- `public/api/README.md` - API documentation

## 🚀 Deployment

1. Build the project: `npm run build`
2. Upload `build/` folder contents to your server
3. Ensure `public/api/` folder is uploaded with PHP files
4. Configure SMTP credentials in `public/api/smtp-config.php`
5. Test the contact form

See `DEPLOYMENT.md` for detailed instructions.

## 📝 Available Scripts

### `npm start`
Runs the app in development mode at http://localhost:3000

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## 🔧 Configuration

### Contact Form
Edit `public/api/smtp-config.php` to configure email settings.

### Contact Recipients
Edit `public/api/contact.php` (line ~105) to change recipient email addresses.

## 📄 License

Private project for Relique Consultants.

---

**Built with ❤️ for Relique Consultants**