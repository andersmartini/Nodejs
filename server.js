var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
<<<<<<< HEAD
  	
    var postData = "";
    var pathName = url.parse(request.url).pathname;
   
    console.log("Request for " + pathName + " received.");
      route(handle, pathName, response, request);
       
=======
  	var pathName = url.parse(request.url).pathname;
    console.log("Request for " + pathName + " received.");

	route(pathName);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
>>>>>>> 11d5e1727728c85d0e6fcf90ba68397ab207fda2
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
