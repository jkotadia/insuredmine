To start server
```bash
$ npm i

$ node index.js
```
For Tracking real-time CPU utilization of the node server and on 70% usage restart the server run below command.
```bash
$ node index.js monitor
```
*Note:* While testing CPU utilization was very high when uploading csv due to worker threads. So to check upload API functionality start server without `monitor` agrv.

check project directory for postman collection: `./assessment.postman_collection.json`
