import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST || 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const options = {
    from: 'you@example.com',
    to: 'user@gmail.com',
    subject: 'hello world',
    html: template,
  };

  await transporter.sendMail(options);

  return res.json({ message: "Email sent" });
});

app.listen(3001);

// Export the Express API
module.exports = app