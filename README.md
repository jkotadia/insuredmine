To Start server
```bash
$ npm i
$ node index.js
```
For Tracking real-time CPU utilization of the node server and on 70% usage restart the server run below command.
```bash
$ node index.js monitor
```
*Note:* On testing CPU utilization was very high when uploading csv due to worker threads. So to check upload API functionality start server without `monitor` agrv.

Check project directory for Postman Collection: `assessment.postman_collection.json`