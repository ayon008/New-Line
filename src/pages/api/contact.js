import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Replace with your actual API key

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { name, email, phone, subject, message } = req.body;
    

    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const senderEmail = "webdevservices25@gmail.com"; // Your verified domain email

        const response = await resend.emails.send({
            from: senderEmail,
            to: '18eee060@gmail.com', // sending to same email address
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #27205F;">New Client Message</h2>
          <p>You’ve received a new message from the website contact form.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #27205F;">
            ${message}
          </blockquote>
          <br/>
          <p>Please respond to the client as soon as possible.</p>
          <p><strong>– Selfmaid Cleaning Solutions</strong></p>
        </div>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully.",
            id: response.id,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email." });
    }
}
