import { Resend } from 'resend';

// Vercel handles env variables, so we check for it or fallback (not recommended for prod though)
const resendApiKey = process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, message } = req.body;

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Resend testing works with this sender
            to: 'ayushdewal2005@gmail.com', // Where you want to receive the email
            subject: `Portfolio Contact from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`,
            reply_to: email, // This allows you to click "Reply" in your email client
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message || error.toString() });
    }
}
