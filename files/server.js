require('dotenv').config();
const express = require('express');
const app = express();



const PORT = process.env.PORT
console.log(PORT)

app.listen(PORT , ()=>{
    console.log(`App listening on http://localhost:${PORT}`)
})


