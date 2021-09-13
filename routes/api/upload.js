const csv = require('csvtojson');
const { Worker } = require('worker_threads');
const workerThreadCount = 2;

function saveToMongo(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__basedir + '/worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      console.log(`exiting worker thread`);
      if (code !== 0)
        reject(new Error(`Stopped the Worker Thread with the exit code: ${code}`));
    })
  })
}
module.exports = (req, res) => {
  const csvStr = req.file.buffer.toString();
  csv().fromString(csvStr).then(async (jsonObj) => {
    console.time('savetime');
    const distributionIndex = Math.ceil(jsonObj.length / workerThreadCount);
    let promiseSaves = [];
    for(let i=0;i<workerThreadCount;i++){
      const part = jsonObj.splice(-distributionIndex);
      promiseSaves.push(saveToMongo(part));
    }
    let result = await Promise.all(promiseSaves);
    console.timeEnd('savetime');
    res.json(result[0]);
  });
}
