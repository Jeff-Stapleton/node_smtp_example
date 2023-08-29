const { createTransport } = require('nodemailer');

const transporter = createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: "crewapp",
        pass: "",
    },
});

const mailOptions = {
    from: 'crewapp@flybreeze.com',
    to: 'support@crewapp.is',
    subject: `Test`,
    text: `Your text content`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});