const { Job } = require("../../db");

module.exports = async (req, res) => {
    try {
        let new_job = await Job(req.body).save();
        res.json(new_job);            
    } catch (error) {
        res.json({error});
    }
}