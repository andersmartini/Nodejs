function start(response, postData){
  console.log("Request handler: 'start' was called")
	var body = "<html>" +
					"<head>" +
						"<meta http-equiv= 'Content-Type' content='text/html'>" +
							"</head>" +
								"<body>" + "<h1>Voce me ama mo?</h1>" + 
									"<form action='/upload' method= 'post'> " +
										"<textarea name='text' rows= '20' cols='60'></textarea> " + 
											"<input type = 'submit' value= 'submit text' /> " +
												"</form>" + 
													"</body>" +
														"</html>" ;

	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write(body);
	response.end();
};


function upload(response, postData){
	console.log("Request handler upload was called");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("you've sent a text: " + postData);
	console.log (postData);
	response.end();
}

exports.start =start;
exports.upload =upload;
