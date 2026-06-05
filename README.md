# Deployment Configuration

## Environment Variables
Before deploying, ensure you have set the following required environment variables:
- `RESEND_API_KEY`: API Key for the Resend SDK for dispatching forms.

## Vercel Deployment Steps
1. Import the repository into Vercel.
2. In the Environment Variables settings, configure `RESEND_API_KEY`.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
4. Click **Deploy**.

## Post-Launch Verification
1. Verify any associated DNS records are correctly routing to Vercel.
2. Verify Resend domain authentication so emails do not land in spam.
3. Test the booking widget end-to-end.
