const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser:true});
var contactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    desc:String
})
app.use(express.urlencoded())
var Contact = mongoose.model('Contact',contactSchema);
app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
})
app.get('/about',(req,res)=>{
    res.status(200).render('about.pug')
})

app.get('/services',(req,res)=>{
    res.status(200).render('services.pug')
})
app.get('/classinfo',(req,res)=>{
    res.status(200).render('classinfo.pug')
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("item is saved to database...")
    }).catch(()=>{
        res.status(404).send("iten is not save to db")
    })
})
app.listen(port)