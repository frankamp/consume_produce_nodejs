var connect = require('connect')
var http = require('http')
var url = require('url')
exports.app = connect()

// respond to all requests
exports.app.use(function(req, res){
  var parsed_url = url.parse(req.url);
  var raw_url = parsed_url.path.split("/")[1];
  var matches = /^([0-9]*)\+([0-9]*)=$/.exec(raw_url);
  if (matches){
    console.log("Got a valid request to add " + matches[1] + " and " + matches[2]);
    var answer = parseInt(matches[1]) + parseInt(matches[2])
  } else {
    res.writeHead(400, {'Content-Type': 'application/json' });
    res.end(JSON.stringify({'error': 'invalid format'}));
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({'answer': answer}));
})

//create node.js http server and listen on port
http.createServer(exports.app).listen(3000);