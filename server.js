
      const http = require('http');
const httpServer = http.createServer(function(req, res) {
      if(req.url === '/music') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('<h1>I love playing the piano!!!\n <h1>');
    }
    else if(req.url === '/books') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Reading books is interesting!\n');
    }
     else if(req.url === '/books/fun') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('I prefer reading fiction !!!\n');
    }
    else if(req.url === '/university/life') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('We have to study 25 hours a day.\n');
	}
     else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("This is not fair!");
    }
});
httpServer.listen(3001);
