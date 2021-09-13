const { Schema } = require('mongoose');

const UserAccountSchema = new Schema({
    account_name: { type : String , unique : true }
},{
    collection: 'user_account'
});

module.exports = UserAccountSchema;