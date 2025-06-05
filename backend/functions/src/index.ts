
const config = require('../../config/config');
import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';
import * as express from 'express';


// Konfiguracja Express
const app = express();
app.use(cors({ origin: true }));
app.use(express.json()); // Obsługa JSON

// Konfiguracja Nodemailer z Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'slupiktomasz@gmail.com',  // e-mail 
    pass: config.PASSWORD_FIREBASE_EMAIL             
  }
});

// Endpoint do wysyłki
app.post('/sendEmail', async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).send({ error: 'Wszystkie pola są wymagane!' });
  }

  const mailOptions = {
    from: 'slupiktomasz@gmail.com',  // Musi być ten sam co w `transporter`
    to: 'your-receiving-email@gmail.com', // Wpisz swój docelowy e-mail
    subject: `Nowa wiadomość od ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'E-mail wysłany pomyślnie!' });
  } catch (error) {
    console.error('Błąd wysyłki e-maila:', error);
    res.status(500).send({ error: error.toString() });
  }
});

// Cloud Function dla Express API
export const sendEmail = functions.https.onRequest(app);
