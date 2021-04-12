const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mdashifreza111@gmail.com',
        pass: 'mdashif@111'
    }
});

var mailOptions = {
    from: 'mdashifreza111@gmail.com',
    to: 'mdashifreza3@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});