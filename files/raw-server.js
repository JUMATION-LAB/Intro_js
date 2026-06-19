
const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.method === 'GET' && req.url === '/' ){
        res.writeHead( 200 , {'Content-Type': 'text/plain'});
        res.end('The req end is true.') //Turns the page black with the text.
        // res.end(()=>{
        //     console.log('The req end is true.');
        // })

    } else {
        res.writeHead( 404,  {'Content-Type': 'text/plain'});
        res.end('Not found');
    }
});

const PORT = 3000;
server.listen( PORT , ()=>{
    console.log('Listening at port http://localhost:',PORT)
});


