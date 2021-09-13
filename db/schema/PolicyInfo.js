const { Schema } = require('mongoose');

const PolicyInfoSchema = new Schema({
    policy_number: String,
    policy_start_date: Date,
    policy_end_date: Date,
    policy_category_id: {
        type: Schema.Types.ObjectId,
        ref: 'PolicyCategory'
    },
    policy_carrier_id: {
        type: Schema.Types.ObjectId,
        ref: 'PolicyCarrier'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    collection: 'policy_info'
});

module.exports = PolicyInfoSchema;