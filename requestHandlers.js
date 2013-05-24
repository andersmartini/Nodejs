var querystring = require("querystring");
var formidable = require("formidable");
var fs = require("fs")

function start (response, request){
	console.log("called 'start' ")
		var imagebody =		"<html>" +
									"<head>" +
										"<meta http-equiv= 'Content-Type' content='text/html'>" +
											"</head>" +
												"<body>" + "<h1>You lookin good?</h1>" + 
													"<form action='/upload' method= 'post' enctype='multipart/form-data'> " +
														"<input type='file' name='upload' multiple='multiple'> " + 
															"<input type = 'submit' value= 'Upload file' /> " +
																"</form>" + 
																	"</body>" +
																		"</html>" ;

		response.writeHead(200, "Content-Type = 'text/html");
		response.write(imagebody);
		response.end();
}





function upload(response, request){
	console.log("Request handler upload was called");
	var form = new formidable.IncomingForm();
	form.encoding = "UTF-8";
	form.parse(request, function(error, fields, files){
		console.log("parsing done!"); 
		
		fs.rename( files.upload.path, "/tmp/test.png", function(err){
			if(error) {
			fs.unlink("/tmp/test.png");
			fs.rename(files.upload.path, "tmp/test.png");
			}
		

	});
	

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Recieved Image: <br/>");
	response.write("<img src= '../show' />");
	response.end();
  });
}



function show (response){
	console.log("called 'SHOW'");
	fs.readFile("/tmp/test.png", "binary", function(error, file){
		if(error){
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		}else{
			response.writeHead(200, {"Content-Type":"image/png"});
			response.write(file, "binary")
			response.end();
		}
	});
}





exports.start =start;
exports.upload =upload;
exports.show = show;
