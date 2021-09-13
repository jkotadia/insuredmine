const { Schema } = require('mongoose');

const MessageSchema = new Schema({
    message: String
},{
    collection: 'message'
});

module.exports = MessageSchema;