import nodemailer from "nodemailer";
import dotenv from "dotenv";
import expressAsyncHandler from "express-async-handler";
import throwError from "./throw-error.js";

dotenv.config();

const SendMail = expressAsyncHandler(async (data, req, res) => {
  const mailTransportOptions = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === "true", // Assuming MAIL_SECURE is set as 'true' or 'false'
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    // debug: true, // Enable debug mode for detailed SMTP logs
    // logger: true, // Enable logging for debug information
  };
  const transporter = nodemailer.createTransport(mailTransportOptions);

  const mailData = {
    from: process.env.MAIL_USER,
    to: data.to,
    subject: "One Time Verification - Shopeasey",
    html: `
      <p>Please note that this OTP is valid for a limited time period and should not be shared with anyone. If you did not request this OTP, please ignore this email. If you have any questions or encounter any issues, please feel free to contact our support team at <b>noreply@shopeasey.com</b>.</p>
      <p>${data.otp}</p>
      <p>Thank you for choosing our service.</p>
      <p style='margin-bottom:0'>Best regards,</p>
      <h3 style='margin:0'><b>ShopEasey Team</b></h3>
    `,
    text: "That was easy!",
  };

  try {
    const info = await transporter.sendMail(mailData);
    if (info) {
      return true;
    }
    return false;
  } catch (error) {
    throwError(error);
  }
});

export default SendMail;
