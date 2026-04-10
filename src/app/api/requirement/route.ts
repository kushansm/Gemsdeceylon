import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const type = formData.get("type") as string;
        const budget = formData.get("budget") as string;
        const message = formData.get("message") as string;
        const files = formData.getAll("files") as File[];

        if (!fullName || !email || !message) {
            return NextResponse.json(
                { error: "Required fields are missing" },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter
        const emailUser = process.env.EMAIL_USER || "ceylongemsinternationalinfo@gmail.com";
        const emailPass = process.env.EMAIL_PASS;

        if (!emailPass) {
            console.error("EMAIL_PASS is not defined in environment variables");
            return NextResponse.json(
                { error: "Server email configuration is missing. Please set EMAIL_PASS." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        // Prepare attachments
        const attachments = await Promise.all(
            files.map(async (file) => {
                const buffer = Buffer.from(await file.arrayBuffer());
                return {
                    filename: file.name,
                    content: buffer,
                };
            })
        );

        // Email Content
        const mailOptions = {
            from: email,
            to: "ceylongemsinternationalinfo@gmail.com",
            subject: `New Requirement: ${type} - ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #0A0A0A; border-bottom: 2px solid #EAB308; padding-bottom: 10px;">New Customer Requirement</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Full Name:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "N/A"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Requirement Type:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${type}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget Range:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || "Not Specified"}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px;">
                        <h4 style="margin-bottom: 10px; color: #0A0A0A;">Message / Description:</h4>
                        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; color: #555;">
                            ${message.replace(/\n/g, "<br>")}
                        </div>
                    </div>
                    <p style="margin-top: 30px; font-size: 12px; color: #999;">This email was sent from the Gems De Ceylon Customer Requirement form.</p>
                </div>
            `,
            attachments: attachments,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send requirement. Please try again later." },
            { status: 500 }
        );
    }
}
