// @ts-ignore
import Resend from "resend";
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request){
    try {
        const body=await req.json();
        const{name,email,message}=body;
        const {data,error}=await resend.emails.send({
            from: `Klient ${email}`,
            to: ["k4cper.petelicki@gmail.com"],
            subject: `Wiadomość od ${name} przez formularz kontaktowy`,
            html: `
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (err) {
        return Response.json({ error: String(err) }, { status: 500 });
    }
}