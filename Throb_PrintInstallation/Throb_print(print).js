//Throb_Print(print) (2019) by Winnie Soon
//last update: 19Oct 2019

const sleep = require('sleep');
const fs = require('fs');
const hound = require('hound');
const exec = require('child_process').exec;  
watcher = hound.watch('Downloads');

const http = require('http');
const path = require('path');
let server = http.createServer(handleRequest);
const opn = require('opn');
const port = 8080;

function handleRequest(req, res) {
  let pathname = req.url;
  
  if (pathname == '/') {
    pathname = '/index.html';
  }
  
  let ext = path.extname(pathname);

  const typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  let contentType = typeExt[ext] || 'text/plain';

  fs.readFile(__dirname + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}
server.listen(port);
console.log('Server is started on port ' + port);
opn('localhost:'+port, {app:'firefox'});

watcher.on('create', function(file, stats) {
  console.log('Image: ' + file + ' is created');
  if (file.indexOf('part') > -1) {		
  }else{
    let printfile = file;
    printNow(printfile);
  }
});

function printNow(f) {
  sleep.sleep(5);  
  console.log("Sending to print: " + f); 
  exec('lp '+f, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`exec error: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  });
};
