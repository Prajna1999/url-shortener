import express from "express";

const app=express();

//set ejs view engine

app.set('view engine', 'ejs')
//route for index
app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(process.env.PORT||5000);