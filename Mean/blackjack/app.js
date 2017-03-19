// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/card.js") {
         fs.readFile('card.js', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/javascript'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/deck.js") {
         fs.readFile('deck.js', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/javascript'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/player.js") {
         fs.readFile('player.js', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/javascript'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/dealer.js") {
         fs.readFile('dealer.js', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/javascript'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/game.js") {
         fs.readFile('game.js', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/javascript'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/templates.js") {
         fs.readFile('templates.js', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/javascript'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/main.js") {
         fs.readFile('main.js', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/javascript'});
             response.write(contents);
             response.end();
         });
    }
    // else if (request.url === "/bower_components/skeleton/css/normalize.css") {
    //      fs.readFile('normalize.css', 'utf8', function (errors, contents){
    //          response.writeHead(200, {'Content-Type': 'text/css'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    // else if (request.url === "/bower_components/skeleton/css/skeleton.css") {
    //      fs.readFile('skeleton.css', 'utf8', function (errors, contents){
    //          response.writeHead(200, {'Content-Type': 'text/css'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    else if (request.url === "/style.css") {
         fs.readFile('style.css', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/css'});
             response.write(contents);
             response.end();
         });
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(8000);
// print to terminal window
console.log("Running in localhost at port 8000");
