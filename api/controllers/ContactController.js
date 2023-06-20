const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.web.de',
  port: 587,
  secure: false, // true for 465 port, false for other ports
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = {
  index: function (req, res) {
    res.view('contact/create');
  },

  create: async function (req, res) {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.badRequest('Please fill in all fields');
    }

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USERNAME, // sender address
        to: process.env.EMAIL_RECIPIANT, // recipient address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });

      return res.ok('Form submitted successfully');
    } catch (err) {

      console.error('Error sending email:', err);
      return res.serverError('An error occurred while processing the form');
    }
  }
};
