const express = require('express');
const http = require('http');

const app = express();

let dishes = [
    { 
        id: 1,
        name : 'tomato',
        price : 100 

    },
    { 
        id: 2,
        name : 'onions',
        price : 200 

    },
    { 
        id: 3,
        name : 'Apple',
        price : 300 

    }
]


app.post('/post' , ( req , res )=>{
    const dish = { 
        id: 4,
        name : 'tomato',
        price : 400 

    }


    dishes = [ ...dishes , dish ];

    
    res.status(201).json(dishes);

    console.log(dishes);
    
});


app.get('/dishes/:name' , ( req , res )=>{
    const name = req.params.name;
    console.log(name);
    
    dishes.forEach( dish =>{
        if( name === dish.name){ 
            res.status(200).json(`You wanted a ${dish.name} with price ${dish.price}`)
        } 
    })
    
    
})
// CRUD


app.post('/' , ( req , res )=>{
    const dish = { 
        id: 4,
        name : 'tomato',
        price : 400 

    }


    dishes = [ ...dishes , dish ];

    
    res.status(201).json(dishes);

    console.log(dishes);
    
});










const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App listening on http://localhost:${PORT}`)
} );

