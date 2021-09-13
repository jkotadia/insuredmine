const { Schema } = require('mongoose');

const PolicyCarrierSchema = new Schema({
    company_name: { type : String , unique : true }
},{
    collection: 'policy_carrier'
});

module.exports = PolicyCarrierSchema;