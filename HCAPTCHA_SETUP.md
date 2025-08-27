# hCaptcha Setup Instructions

## Step 1: Create hCaptcha Account
1. Go to [https://www.hcaptcha.com/](https://www.hcaptcha.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your Site Key
1. Log into your hCaptcha dashboard at [https://dashboard.hcaptcha.com/](https://dashboard.hcaptcha.com/)
2. Go to "Sites" section
3. Click "Add Site"
4. Enter your domain (e.g., `codingbuds.com` or `localhost` for testing)
5. Copy the **Site Key** (this is public and goes in your HTML)

## Step 3: Get Your Secret Key
1. In the hCaptcha dashboard, go to "Settings" > "Profile"
2. Copy your **Secret Key** (this is private and goes on your server)

## Step 4: Update Your HTML
In your `index.html` file, replace `YOUR_SITE_KEY_HERE` with your actual site key:

```html
<div 
    class="h-captcha" 
    data-sitekey="YOUR_ACTUAL_SITE_KEY_HERE"
    data-theme="light"
    data-size="normal"
></div>
```

## Step 5: Server-Side Verification (Important!)
For complete security, you should verify the hCaptcha token on your server:

### Backend Verification (Required for Production)
When your form is submitted, verify the hCaptcha token server-side by sending a POST request to:
```
https://api.hcaptcha.com/siteverify
```

With parameters:
- `secret`: Your secret key
- `response`: The hCaptcha token from the form
- `remoteip`: User's IP address (optional but recommended)

### Example Server-Side Verification (Node.js)
```javascript
const fetch = require('node-fetch');

async function verifyHCaptcha(token, userIP) {
    const response = await fetch('https://api.hcaptcha.com/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            secret: 'YOUR_SECRET_KEY',
            response: token,
            remoteip: userIP
        })
    });
    
    const data = await response.json();
    return data.success;
}
```

## Testing
For testing, you can use these test keys:

**Test Site Key**: `10000000-ffff-ffff-ffff-000000000001`
**Test Secret Key**: `0x0000000000000000000000000000000000000000`

These will always pass without showing a challenge, but provide no real protection.

## Current Implementation
The form now includes:
- ✅ hCaptcha widget before submit button
- ✅ Client-side validation (prevents submit without completing captcha)
- ✅ hCaptcha token included in email template
- ✅ hCaptcha reset after successful form submission

## Security Note
⚠️ **Important**: The current implementation only includes client-side validation. For production use, you **must** implement server-side verification of the hCaptcha token to ensure security.

## Customization Options
You can customize the hCaptcha widget by adding these data attributes:

- `data-theme="light"` or `data-theme="dark"`
- `data-size="normal"`, `data-size="compact"`, or `data-size="invisible"`
- `data-callback="myFunction"` - JavaScript function to call on success
- `data-expired-callback="myExpiredFunction"` - Function to call when token expires
- `data-error-callback="myErrorFunction"` - Function to call on error

Example:
```html
<div 
    class="h-captcha" 
    data-sitekey="YOUR_SITE_KEY"
    data-theme="light"
    data-size="normal"
    data-callback="onCaptchaSuccess"
></div>
```
