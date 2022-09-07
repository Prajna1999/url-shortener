import express from "express";
import mongoose from "mongoose";
// import { shortUrlSchema } from "./models/shortUrls";
export {shortUrlSchema} from './models/shortUrls.js'


const app=express();

mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser:true, useUnifiedTopology:true
})
//set ejs view engine

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
//route for index
app.get('/',async (req,res)=>{
    const ShortUrls=await shortUrlSchema.find();

    res.render('index', {shortUrls:ShortUrls})
})

//route for shortUrls. DB Connect.
app.get('/shortUrls' , async (req, res)=>{
    await shortUrlSchema.create({full:req.body.fullUrl});

    res.redirect('/')
})

app.listen(process.env.PORT||5000);