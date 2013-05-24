
function route(handle,pathName,response,request){
	console.log("about to route a request for" + pathName)
	if(typeof handle[pathName] === "function"){
		handle[pathName](response, request);
	} else {
		console.log("No requesthandler found for " + pathName);
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.write("404 ta bebado?")
		response.end();	
	}
}

exports.route = route;