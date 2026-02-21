import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const resendApiKey = process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;
// Only instantiate if API key exists to prevent crashing if someone clones without it
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const apiPlugin = () => ({
  name: 'api-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/send' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString() });
        req.on('end', async () => {
          try {
            if (!resend) {
              throw new Error("Resend API key missing");
            }
            const data = JSON.parse(body);
            const response = await resend.emails.send({
              from: 'onboarding@resend.dev',
              to: 'ayushdewal2005@gmail.com',
              subject: `Portfolio Contact from ${data.name}`,
              html: `<p><strong>Name:</strong> ${data.name}</p>
                     <p><strong>Email:</strong> ${data.email}</p>
                     <p><strong>Message:</strong></p>
                     <p>${data.message}</p>`,
              reply_to: data.email
            });
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
          } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
          }
        });
        return;
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiPlugin()],
})
