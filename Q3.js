const express=require("express");
const app=express();
const data = {
    "msg":`I am home page`
}
const data2={
    "msg":`I am about page`
}
const data3={
    'email':"alokraj10june@gmail.com"
}
app.get("/",(req,res)=>{
    res.send(data)
});
app.get("/about",(req,res)=>{
    res.send(data2)
});
app.get("/contact",(req,res)=>{
    res.send(data3)
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
