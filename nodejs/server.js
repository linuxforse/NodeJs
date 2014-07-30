var http = require("http");
var url = require("url");

function start(router) {
function onRequest(request,response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + "received.");
	router(pathname);
response.writeHead(200,{"Content-Type": "text/plain"});
response.write("Hello Word");
response.end();
}

http.createServer(onRequest).listen(80);
console.log("Server has started.");
}
exports.start = start;
