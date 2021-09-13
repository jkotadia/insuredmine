const { Schema } = require('mongoose');

const AgentSchema = new Schema({
    agent: { type : String , unique : true }
},{
    collection: 'agent'
});

module.exports = AgentSchema;