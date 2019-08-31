const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const path =  require('path');
const compression = require('compression')

const app = express();

app.use(compression())

app.use(express.static((path.join(__dirname,'./dist/EDGAR-ALAMBRADOS'))));

app.get('/video',(req,res)=>{
 const path = './server/video/one.mp4'

   const head = {
     'Accept-Ranges': 'bytes',
     'Content-Type': 'video/mp4',
   }

   res.writeHead(200, head)
   fs.createReadStream(path).pipe(res)

})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'./dist/EDGAR-ALAMBRADOS/index.html'));
})

/*
https.createServer({
  key: fs.readFileSync(path.join(__dirname,'./server/ssl/domain-key.pem')),
  ca: fs.readFileSync(path.join(__dirname,'./server/ssl/domain-ca.crt')),
  cert: fs.readFileSync(path.join(__dirname,'./server/ssl/domain-crt.crt'))
}, app)
.listen(443, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
*/

http.createServer(app)
    .listen(process.env.PORT || /*80*/8080, function () {
      console.log('Example app listening on port')
})