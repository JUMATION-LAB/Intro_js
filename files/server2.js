const express = require('express');
const app = express();

app.use(express.json());

let dishes = [
    {
        id:1,
        name:'meat',
        price:20
    },
    {
        id:2,
        name:'ovacado',
        price:30
    },
    {
        id:3,
        name:'ofalls',
        price:40
    }
]

app.get('/dishes/:id',(req , res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    
    dishes.forEach((d)=>{
        if(d.id === id ) return res.status(200).json(d);
    });
})

//Changing the data in the db, all data must be defined in the body
// app.put('/dishes/:id' , (req , res )=>{
//     const id = parseInt(req.params.id);
//     let body = req.body;
//     let { price , name } = body;
//     console.log(body)
//     //Looping through the database.
//     dishes.forEach((dish)=>{
//         if(dish.id === id ){
//             console.log(dish);
//             dish.name = name;
//             dish.price = price;
//         } 
// });
// res.send(dishes);

// })
app.put('/dishes/' , (req , res )=>{
    const id = parseInt(req.params.id);
    let body = req.body;
    console.log(body)
    //Looping through the database.
    dishes = [ ...dishes , body];
res.send(dishes);

})


//Patch - This changes only one specified item
app.patch('/dishes/:id' , (req , res )=>{
    const id = parseInt(req.params.id);
    let body = req.body;
    let { price } = body;
    console.log(body)
    //Looping through the database.
    dishes.forEach((dish)=>{
        if(dish.id === id ){
            console.log(dish);
            dish.price = price;
        } 
});
res.send(dishes);

})



//Delete - This changes only one specified item
app.delete('/dishes/:id' , (req , res )=>{
    const id = parseInt(req.params.id);
    let body = req.body;
    console.log(id)
    //Looping through the database.
    console.log(dishes);
    dishes.forEach((dish)=>{

        if(dish.id === id ){
            dishes = dishes.filter( d => d.id !== id );
            
            res.status(200).json(dishes);
        } 
        
    });
    console.log(dishes);
})











const PORT = 3000
app.listen(PORT , ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})



