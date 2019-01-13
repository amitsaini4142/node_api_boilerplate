const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { 
        type: String,
        required:true
    },
    lastName: { 
        type: String,
        default:null
    },
    email: { 
        type: String,
        required:true,
        unique: true
    },
    password: { 
        type: String,
        required:true,
        select:false
    },
})

module.exports = mongoose.model('User', UserSchema);

