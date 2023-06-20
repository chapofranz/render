// module.exports = {
//   index: function (req, res) {
//     res.view('contact/create');
//   },
//
//   create: async function (req, res) {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) {
//       return res.badRequest('Please fill in all fields');
//     }
//
//     try {
//       // Handle the form submission (e.g., send an email, save to database, etc.)
//       // Replace this code with your own logic
//
//       // Send an email
//       await sendEmail(name, email, message);
//
//       // Or save the form data to a database
//       await Contact.create({ name, email, message });
//
//       // Return a success response
//       return res.ok('Form submitted successfully');
//     } catch (err) {
//       // Handle any errors
//       return res.serverError('An error occurred while processing the form');
//     }
//   }
// };

// Require the nodemailer package
const nodemailer = require('nodemailer');

// Create a transport object using the SMTP settings of your email provider
const transporter = nodemailer.createTransport({
  host: 'smtp.web.de',
  port: 587, // or the appropriate port for your email provider
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

    // Validate the form data
    if (!name || !email || !message) {
      return res.badRequest('Please fill in all fields');
    }

    try {
      // Send the email using Nodemailer
      await transporter.sendMail({
        from: process.env.EMAIL_USERNAME, // sender address
        to: process.env.EMAIL_RECIPIANT, // recipient address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });

      // Or you can send an HTML email like this:
      /*
      await transporter.sendMail({
        from: 'your-email@example.com',
        to: 'your-email@example.com',
        subject: 'New Contact Form Submission',
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`
      });
      */

      // Return a success response
      return res.ok('Form submitted successfully');
    } catch (err) {
      // Handle any errors
      console.error('Error sending email:', err);
      return res.serverError('An error occurred while processing the form');
    }
  }
};
