import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

export default async function EnviarCorreo(req, res) {
  try {
    const { correo, mensaje } = req.body.values;

    const config = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_CODE,
      },
    });

    const message = {
      from: correo,
      to: process.env.EMAIL_USER,
      subject: `CONSULTA DESDE LA WEB DE: ${correo}`,
      text: mensaje,
    };

    await config.sendMail(message);
    res.send("Email enviado");
  } catch (error) {
    res.send("Error al enviar el correo");
  }
}
