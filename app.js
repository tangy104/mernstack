const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express =require('express');
const app = express();
const DB='mongodb+srv://lemon10swargiary:paranlemon@cluster0.c0ofab5.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true, instead use async, await
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log('connection succesful');
}).catch((err)=>console.log('no connection'));

//Middleware

const middleware=(req,res,next)=>{
    console.log("Hello my Middleware");
    next();
}

app.get('/', (req,res)=>{
    res.send('Hello World from the server');
})
app.get('/about', middleware, (req,res)=>{
    console.log('Hello my about');
    res.send('Hello about World from the server');
})
app.get('/contact', (req,res)=>{
    res.send('Hello contact World from the server');
})
app.get('/signin', (req,res)=>{
    res.send('Hello Login World from the server');
})
app.get('/signup', (req,res)=>{
    res.send('Hello Registration World from the server');
})


app.listen(3000, ()=>{
    console.log('server is running at port no 3000');
})