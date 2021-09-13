const { PolicyInfo } = require("../../db");

module.exports = async (req,res) => {
    let user_policies = await PolicyInfo.aggregate([
        {
            $group: {
                _id: "$user_id",
                policy_count: {
                    $sum: 1
                },
                policies: {$push: '$$ROOT'}
            }
        },
        {
            $sort: {
                policy_count: -1
            }
        }
    ])
    res.json(user_policies);
}