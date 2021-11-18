const { json, urlencoded } = require("express");
const express = require("express");

const port = 3000;

const server = express();

server.use(json());
server.use(urlencoded({extended:true}));


server.get('/' , (req,res)=>{
    res.setHeader("content-Type" , "text/html")
    res.sendFile(__dirname + '/index.html')
})



server.get('/welcome' , (req,res)=>{
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const city = req.query.city;
    console.log(" First Name is:"+firstName);
    console.log(" lastName is: "+lastName); 
    console.log(" cityName is: "+city);
    res.setHeader("Content-Type","text/html")
    res.sendFile(__dirname+'/welcome.html'); 
})


server.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
})