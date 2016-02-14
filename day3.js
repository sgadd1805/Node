var HashMap = require("HashMap");

function createMap(){
  var map = new HashMap();
  map.set("value", "key");
  console.log("map count");
  console.log(map.count());
  var newMap = map.clone();
  console.log("map clone");
  console.log(newMap);
  map.forEach(function(key, value){
      console.log("in for each loop");
      console.log(map.get(key));
  });
}

var app = require("express")();

app.get('/', function(request, response){
    request.send('<h1>hello world<h1>');
});

app.listen(8080);


//createMap();
// var http = require("http");
// var https = require("https");
//
// var options = {"hostname" : "en.wikipedia.org",
//                "port" :  443,
//               "path" : "/wiki/George_Washington",
//               "method" : "GET"
//             };
//
// var res = http.request(options, function(response){
//     console.log(response.statusCode);
// });

// http.createServer(function(request, response){
//     //response.writeHead({"Content-Type" : "text/json" });
//     var json =  { "User" : "Stephen"};
//     //response.write(JSON.stringify(json));
//     if(request.url === "/route1"){
//       route1(request,response);
//     }
//     else if(request.url === "/route2"){
//       route2(request, response);
//     }
//
//     response.end("no route");
//
// }).listen(8080);
//
// function route1(request, response){
//   console.log("route 1");
//   console.log(request.url);
//   response.end("route1");
// }
//
// function route2(request, response){
//   console.log("route 2");
//   console.log(request.url);
//   response.end("route 2");
// }



// var server = http.createServer(function(request, response){
//     console.log(request.url);
//     var url = url.parse(request.url, true).query;
//     console.log(url);
//     response.write("hey");
//     response.end();
// });
//
// server.listen(8080);
