var http = require("http");

var httprequest = http.createServer(function(request, response){
    response.write("yo son");
    response.end();
});
httprequest.listen(8080);
