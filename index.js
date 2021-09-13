global.__basedir = __dirname;
if(process.argv[2]=='monitor'){
  require('./monitor');
}
const multer = require("multer");
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

// Endpoint to upload CSV
const csvFilter = (req, file, cb) => {
  if (["text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb("file mimetype not supported!", false);
  }
};

const uploadFile = multer({ storage: multer.memoryStorage(), fileFilter: csvFilter });
app.post('/upload',uploadFile.single('file'),routes.upload);

// Endpoint to search policy info by username
app.get('/search',routes.search);

// Endpoint to aggregate policy by user
app.get('/policies',routes.user_policies);

// Endpoint to create job
app.post('/create-job',routes.create_job);

app.listen(7000,()=>{
    console.log('server is at http://localhost:7000\n\nroutes:')
    app._router.stack.forEach(function(data){
      if (data.route && data.route.path) console.log(`http://localhost:7000`+data.route.path);
    })
});

require('./process_jobs');