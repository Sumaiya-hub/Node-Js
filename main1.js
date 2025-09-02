let http = require('http');
const { request } = require('https');
let server= http.createServer(function(req,response) {
    response.end('hello world')

});
server.listen(5050);
console.log('Server Run');
