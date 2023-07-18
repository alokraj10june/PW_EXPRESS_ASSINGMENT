const express=require("express");
const app=express();
app.get('/random',function(req,res){
    res.type('text/plain');
    var randomnumber=Math.random();
    res.send(randomnumber.toString());
});
app.listen(3100, function () {
    console.log("Server started on port 3100");
});
