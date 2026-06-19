//These are put at the end of the file.
require('dotenv').config();
const express = require('express');
const http = require('http');
// console.log(express)
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.post('/' , (req, res)=>{
    const { name , email } = req.body;
    if(!name || !email ) return res.status(201).json({error : "Missing fields."});

    res.status(201).json({ message : `registered ${email} ${name}` });// 201 succeful and created a new resource created

    console.log(`Name ${name} , Email ${email}`)
    

});











app.listen( PORT, ()=>{
    console.log(`Listening on sever http://localhost:${PORT}`)
    console.log(`changes at ${new Date().toISOString()}`)
})

// Error handler.
app.use((err , req ,res ,next )=>{
    console.error(err); //Log for debugging
    res.status(500).json({error: "Wrong man."})
});

app.get('/err', (req, res)=>{
    throw new Error("Errrrrrrrrroo throw");
})

