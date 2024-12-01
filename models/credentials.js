// let mongoose = require('mongoose');
// //i need to create a schema for the credentials for signup page
// let Userschema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// let credentials = mongoose.model('credentials',Userschema);

// module.exports = {  credentials };

const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('Credential', credentialsSchema);
