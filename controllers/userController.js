const userModel = require('../models/user');
const mailer = require('../utils/mailer');
module.exports = {
    registerUser: registerUser,
    fetchUser:fetchUser
}
function registerUser(req, res, next) {
    let user = new userModel({
        firstName:'amit',
        lastName:'saini',
        email:'amitsaini4142@gmail.com',
        password:'password'
    })
    user.save()
    .then((user) => {
        let mailData = {
            to: 'amitsaini4142@gmail.com',
            subject:'User Registered',
            html:'Welcome!!!'
        };
        return mailer(mailData);
    })
    .then((mailInfo) => {
        res.send({message:'User Registered Successfully.'});
    })
    .catch((err) => {
        res.status(422).send({error:true,message:'Error Registering User'});
    });
}
function fetchUser(req, res, next) {
    // if(!req.body.id){
    //     return res.status(400).send({error:true,message:'Required Params Missing'})
    // }
    userModel.find()
    .then((users) => {
        res.send({data:users})
    })
    .catch((err) => {
        res.status(422).send({error:true,message:'Error Fetching User'});
    });
}