const fs=require('fs');

//reading files 
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
})

console.log(' i love u ');


// writing files
fs.writeFile('./docs/blog1.txt', 'hello bugge , your bugga loves u so much ' ,()=>{
    console.log('file was written ');
});


fs.writeFile('./docs/blog2.txt', 'hello bugge , your bugga loves u so much ' ,()=>{
    console.log('file was written ');
});

// directories 
if (!fs.existsSync('./assets')){ 

fs.mkdir('./assets',(err)=>{
    if(err){
    console.log(err);
    }
    console.log('folder created');
});
}
else {
    fs.rmdir('./assets',(err)=>{
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}


// deleting files 
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log('file deleted');

    })
}