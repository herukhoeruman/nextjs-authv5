import nodemailer, { Transporter } from "nodemailer";
import path from "path";

interface EmailOptions {
  email: string;
  subject: string;
  template: string;
  data: { [key: string]: any };
}

const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await transporter.sendMail({
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Confirm email",
    html: `<p>Click <a href="${confirmLink}">here </a> to confirm email.</p>`,
  });
};
