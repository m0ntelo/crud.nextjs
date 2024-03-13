const nodemailer = require('nodemailer');

interface Mail {
  subject: string
  text: string
  html: string
}

export async function send(mail: Mail): Promise<Mail> {
  
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS
    }
  });
  
  return (
    await transport.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: mail.subject,
      html: mail.html,
      text: mail.text
    })
  )
}