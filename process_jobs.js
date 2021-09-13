const { Job, Message } = require("./db");

async function processJobs() {

    Job.find({
        timestamp: {
            $lte: new Date()
        },
        completed: false
    }).then(async (jobs) => {

        jobs.length ? console.log(`${jobs.length} jobs found.`) : '';

        for (let job of jobs) {
            await Message({
                message: job.message
            }).save();
            job.completed = true;
            await job.save();
        }

    }).catch((error) => {
        console.log(error);
    });

    setTimeout(processJobs, 1000);

}

processJobs();