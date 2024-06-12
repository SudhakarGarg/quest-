const fs=require('fs');

const readStream=fs.createReadStream('./docs/blog3.txt');
const writeStream=fs.createWriteStream('./docs/blog4.txt');
//data event listener
//readStream.on('data',(chunk)=>
//{
//console.log('-----NEW CHUNK -----');
//console.log(chunk.toString());
//writeStream.write('\n NEW CHUNK \n');
//writeStream.write(chunk);
//});


// piping 
readStream.pipe(writeStream);