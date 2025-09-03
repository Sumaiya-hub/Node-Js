//Here ,Give Request to the Server and get Response:

let http = require('http');
const { request } = require('https');
let server= http.createServer(function(request,response) {
    if(request.url== '/'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>This is Home Page</h1>')
        response.end()
    }
    else if(request.url== '/about'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>This is Abour Page</h1>')
        response.end()

    }
    else if(request.url== '/contact'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>This is Contact Page</h1>')
        response.end()

    }
    
});
server.listen(5051);
console.log('Server Run');
