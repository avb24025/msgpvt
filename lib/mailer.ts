import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOTP = async (to: string, otp: string) => {
  const mailOptions = {
  from: `"msgpvt Support" <${process.env.EMAIL_USER}>`,
  to,
  subject: "Verify Your Email Address - msgpvt",
  text: `Hello,

Thank you for signing up with msgpvt. To complete your verification, please use the following One-Time Password (OTP):

${otp}

This code is valid for the next 5 minutes. If you did not request this, please ignore this email.

Best regards,
The msgpvt Team`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2 style="color: #4A90E2;">Verify Your Email Address</h2>
      <p>Thank you for signing up with <strong>msgpvt</strong>. To complete your verification, please use the following One-Time Password (OTP):</p>
      <p style="font-size: 18px; font-weight: bold; color: #000;">${otp}</p>
      <p>This code is valid for the next <b>5 minutes</b>.</p>
      <p>If you did not request this, please ignore this email.</p>
      <br/>
      <p style="font-size: 14px; color: #555;">Best regards,<br/>The msgpvt Team</p>
    </div>
  `,
};


  await transporter.sendMail(mailOptions);
};
