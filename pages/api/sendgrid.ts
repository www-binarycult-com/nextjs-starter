import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
type Data = {
    message: string;
};

async function sendEmail(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const msg = `<p>Name: ${req.body.name}</p><br><p>Email: ${req.body.email}</p><br><p>Phone: ${req.body.phone}</p><br><p>Message: ${req.body.message}</p><br><p>Accepted: ${req.body.accepted}</p>`;
    try {
        await sgMail.send({
            to: "hello@immajung.de",
            from: "hello@immajung.de",
            subject: `${req.body.name} - ${req.body.email} [wir-machen-homepage.de]`,
            html: `<div>Kontaktformular:</div><br><p>${msg}</p>`,
        });
        res.status(200).json({ message: `E-Mail sent successfully!` });
    } catch (error) {
        res
            .status(500)
            .json({ message: `There was an error sending your message. ${error}` });
    }
}

export default sendEmail;


