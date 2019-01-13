const mongoose = require('mongoose');
const dbCreds = require('../config').dbCreds;
mongoose.Promise = Promise;
mongoose.connect(`mongodb://${dbCreds.host}/${dbCreds.database}`);
let db = mongoose.connection;
db.on('error', ()=> {
    console.log("Mongo Connection failed.");
});
db.once('open', ()=> {
  console.log("Mongo Connection Successful.");
});