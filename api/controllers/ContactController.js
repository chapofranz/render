const nodemailer = require('nodemailer');
const Sails = require("sails/lib/app/Sails");

const transporter = nodemailer.createTransport({
  host: 'smtp.web.de',
  port: 587,
  secure: false, // true for 465 port, false for other ports
  auth: {
    user: sails.config.EMAIL_USERNAME,
    pass: sails.config.EMAIL_PASSWORD
  }
});

module.exports = {
  index: function (req, res) {
    res.view('pages/contact');
  },

  create: async function (req, res) {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.badRequest('Please fill in all fields');
    }

    try {
      await transporter.sendMail({
        from: sails.config.EMAIL_USERNAME, // sender address
        to: sails.config.EMAIL_RECIPIANT, // recipient address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });
      req.session.message = "Kontaktformular erfolgreich abgeschickt";
      req.session.messageClass = 'text-success';
      res.view("pages/contact",{ messageClass: req.session.messageClass, message: req.session.message });
      req.session.message = null;
      req.session.messageClass = null;
      return;
    } catch (err) {

      console.error('Error sending email:', err);
      req.session.message = "Kontaktformular nicht erfolgreich abgeschickt";
      req.session.messageClass = 'text-warning';
      res.view("pages/contact",{ messageClass: req.session.messageClass, message: req.session.message });
      req.session.message = null;
      req.session.messageClass = null;
      return;
    }
  }
};
