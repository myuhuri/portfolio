javascript
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit_form', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seuemail@gmail.com',
      pass: 'suasenha'
    }
  });

  let mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'emi.000013wx@gmail.com',
    subject: 'Novo contato de ' + req.body.fname + ' ' + req.body.lname,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));