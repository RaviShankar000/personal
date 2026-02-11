# Email Form Setup Guide

Your contact form is now ready to send real emails! Follow these steps to configure EmailJS:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account: `2300031387cseird@gmail.com`
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Portfolio Message: {{subject}}
```

**Body:**
```
You have a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)

## Step 5: Update Your Code

Open `/Users/kravishankarpatro/Desktop/Personal_portfolio/portfolio/src/components/Contact.jsx`

Find lines 94-104 and replace:

```javascript
const result = await emailjs.send(
    'YOUR_SERVICE_ID',      // Replace with your Service ID from Step 2
    'YOUR_TEMPLATE_ID',     // Replace with your Template ID from Step 3
    {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: '2300031387cseird@gmail.com'
    },
    'YOUR_PUBLIC_KEY'       // Replace with your Public Key from Step 4
);
```

## Example (with fake IDs):

```javascript
const result = await emailjs.send(
    'service_abc123',
    'template_xyz789',
    {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: '2300031387cseird@gmail.com'
    },
    'AbCdEfGhIjKlMnOp'
);
```

## Step 6: Test Your Form

1. Go to http://localhost:5173/
2. Scroll to the Contact section
3. Fill out the form and click "Send Message 🚀"
4. Check your email (`2300031387cseird@gmail.com`) for the message!

## Features Included:

✅ Real-time email sending
✅ Form validation
✅ Loading state while sending
✅ Success/error notifications
✅ Auto-clear form after success
✅ Disabled inputs during submission

## Free Tier Limits:

- 200 emails per month
- Perfect for a portfolio!

## Troubleshooting:

- **Emails not arriving?** Check your spam folder
- **Error sending?** Verify all IDs are correct
- **Template not working?** Make sure variable names match ({{from_name}}, {{from_email}}, etc.)

---

Need help? Let me know! 🚀
