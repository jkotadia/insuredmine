const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/insuredmine');

exports.Agent = mongoose.model('agent',require(`./schema/Agent.js`));
exports.PolicyCarrier = mongoose.model('policy_carrier',require(`./schema/PolicyCarrier.js`));
exports.PolicyCategory = mongoose.model('policy_category',require(`./schema/PolicyCategory.js`));
exports.PolicyInfo = mongoose.model('policy_info',require(`./schema/PolicyInfo.js`));
exports.User = mongoose.model('user',require(`./schema/User.js`));
exports.UserAccount = mongoose.model('user_account',require(`./schema/UserAccount.js`));
exports.Job = mongoose.model('job',require(`./schema/Job.js`));
exports.Message = mongoose.model('message',require(`./schema/Message.js`));
