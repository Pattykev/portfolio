// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Pour servir le fichier HTML

app.post('/send-email', (req, res) => {
    const {email, subject, message } = JSON.stringify(req.body);

    // Configurer le transporteur d'email
    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou tout autre service
        auth: {
            user: 'patricia.tchingue@gmail.com',
            pass: 'PatriciaTCHINGUE@2003'
        }
    });

    const mailOptions = {
        from: email.value,
        to: 'patricia.tchingue@gmail.com',
        subject: subject.value,
        text: message.value
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ success: false, error: error.toString() });
        }
        res.send({ success: true, info });
    });
});

app.get('/download', (req, res) => {
    const file = path.join(__dirname, './assets/TCHINGUE MAKAMTE Patricia Kevine.pdf');
    res.download(file, 'Patricia-TCHINGUE.pdf', { headers: { 'Content-Type': 'application/pdf' } });
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
