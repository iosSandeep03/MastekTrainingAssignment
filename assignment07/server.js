const express=require('express');
const server=express();
const port=3000;
// To access request data in json format we are using below middleware
server.use(express.json());
// To access request data from urlencoding we are using below middlware
server.use(express.urlencoded({extended:true}));

// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});


// '/welcome'->url path using POST
server.post('/welcome',(req,resp)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName
    const City=req.body.City
    console.log("Post First Name: "+firstName);
    console.log("Post last Name: "+lastName);
    console.log("Post City: "+City);
    
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
