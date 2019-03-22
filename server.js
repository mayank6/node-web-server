const express =require('express');
const hbs = require('hbs');
var app=express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
  res.send("TESTING TO DEPLOY SERVER ON HEROKU AND AWS");
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{"obj":"rendered about template"})
})
app.listen(3000);
