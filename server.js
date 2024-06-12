const http = require('http');
const fs = require('fs');
const _=require('lodash');

const server = http.createServer((req, res) => {
   // console.log(req.url, req.method);

   //lodash 
   const num=_.random(0,20);
   console.log(num);


   const greet=_.once(()=>
   {
    console.log('hello')
   });


   greet();
   greet();
    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            case '/about-me':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Read the file and respond
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data.toString());
            res.end();
        }
    });

    // Uncomment if you want to send additional HTML
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello , ninjas</p>');
    // res.write('<p>hello again , ninjas</p>');
    // res.end(); // Note that res.end should be called as a function
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port no. 3000, bale bale server has started');
});
