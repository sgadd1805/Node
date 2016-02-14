// console.log(process.argv);
//
// function grab(input){
//   var index = process.argv.indexOf("Stephen");
//   console.log(index);
//   if(index != -1){
//     console.log("Got it");
//     console.log(process.argv[index+1]);
//   }
// }
//
//
// grab("--user");


// process.stdin.on('data', function(data){
//     console.log(data.toString().trim());
//     process.exit();
// });


// setTimeout(function(){
//   console.log("inner");
// }, 3000);
// console.log("outer");


// setInterval(function(){
//   console.log("beat");
// }, 100);

// var path = require('path');
// var v8 =  require('v8');
// console.log(path.basename(__filename));
// console.log(path.join('mm','sv'));
// console.log(v8.getHeapStatastics());

// var readline = require("readline");
//
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.question("what is Stephen", function(answer){
//     console.log(answer);
// });
var https = require('https');


var options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Washington",
  method: "GET"
};

https.request(options, function(res){
  console.log("done");
  console.log(res.statusCode);
});
