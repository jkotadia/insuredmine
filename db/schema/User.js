const { Schema } = require('mongoose');

const UserSchema = new Schema({
    userType: String,
    email: { type : String , unique : true },
    gender: String,
    firstname: String,
    city: String,
    phone: String,
    address: String,
    state: String,
    zip: String,
    dob: Date
},{
    collection: 'user'
});

module.exports = UserSchema;