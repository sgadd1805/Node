// function get(input){
//   console.log(input);
// }
//
//
// get("Stephen");

// function getSomething(input){
//   console.log(input.toString());
// }
//
// getSomething(process.argv);

// function getStuff(input){
//   var a = input.indexOf("User");
//   if(a != -1){
//     console.log("got" + a[a+1].toString());
//   }else{
//     console.log("does not exist");
//   }
// }
//
// getStuff(process.argv);

// function doSomething(function stuff(){
//   console.log("call back");
// });
//
// doSomething();

// var http = require("http");
//
// var options = {
//   hostname: "en.wikipedia.org",
//   port: 443,
//   path: "/wiki/George_Washington",
//   method: "GET"
// };
//
// http.request(options, function(response){
//   console.log(response.toString());
//   console.log(response.statusCode);
// });
//
// var http = require("http");
//
// http.server((request, response)=>{
//   respnse.writeHead(200, {'Content-Type', 'text/plain'});
//   respone.end("okay");
// });

var HashMap = require('hashmap');

function bar(){
  var map = new HashMap();
  map.set("some key", "some value");
  console.log(map.get("some key"));
}

bar();
