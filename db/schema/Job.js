const { Schema } = require('mongoose');

const JobSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},{
    collection: 'job'
});

module.exports = JobSchema;