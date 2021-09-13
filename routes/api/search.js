const { User, PolicyInfo } = require("../../db");

module.exports = async (req,res)=>{
    let firstname = req.query.username;
    let user = await User.findOne({
        firstname
    });
    let result = await PolicyInfo.findOne({
        user_id: user._id
    });
    res.json(result);
}