const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

app.use(express.static(path.join(__dirname, 'public' ) ));

app.get('/' , (req , res)=> {
    res.sendFile(path.join( __dirname ,'views', 'index.html'));
    // res.sendFile(path.join(__dirname , 'views' , 'index.html'));

})

app.get('/reg', (req, res)=>{

})



app.listen( 3000, ()=>{
    console.log(`Listening on sever http://localhost:${3000}`)
    console.log(`changes at ${new Date().toISOString()}`)
})



