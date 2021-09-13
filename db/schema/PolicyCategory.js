const { Schema } = require('mongoose');

const PolicyCategorySchema = new Schema({
    category_name: { type : String , unique : true }
},{
    collection: 'policy_category'
});

module.exports = PolicyCategorySchema;