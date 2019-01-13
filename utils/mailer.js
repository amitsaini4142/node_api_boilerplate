const nodemailer = require('nodemailer');
const mailCreds = require('../config').mailerCreds;

var transporter = nodemailer.createTransport({
    service: mailCreds.service,
    auth: {
        user: mailCreds.user,
        pass: mailCreds.password
    }
});

function sendMail(mailOptions){
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return reject(error);
            }
            resolve(info);
        });
    });
}
module.exports = sendMail;