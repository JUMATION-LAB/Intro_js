const express = require('express');
const http = require('http');
// console.log(express)
const app = express();

app.get('/', (req, res)=>{
    res.send('Helllllloooo');
});

//Middlewares
app.use(express.json());//Must have for req.body access. Parsing (JSON ==> Js object) Must have for request
app.use( (req , res, next )=>{
    console.log(`The ${req.method},at ${new Date()}`);
    next();
});

//Route Parameters: to extract data from URLs
app.get('/user/:id' , (req, res)=>{ // :id == placeholder 
    const user = req.params.id;     // Access: "142"
    console.log(user);
})

//Query Parameters: 
app.get('/search/', (req, res)=>{ //  /serach?name=juma&email=hey
    const query = req.query;
    console.log(query);
    res.send(query)
    

})



app.post('/echo', (req, res)=>{
    res.json({ echoed : req.body });
});



app.listen( 3000, ()=>{
    console.log(`Listening on sever http://localhost:${3000}`)
    console.log(`changes at ${new Date().toISOString()}`)
})



