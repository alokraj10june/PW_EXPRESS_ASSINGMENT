
const http=require('http');
const data=[
{
    "id":1,
    "name":"Men's T-Shirt",
    "brand":"Puma",
    "Price":3456,
    "Color":"Black",
    "Size":"M",
    "category":"Clothing",
},
    {
        "id":2,
        "name":"Men's T-Shirt",
        "brand":"Puma",
        "Price":3456,
        "Color":"red",
        "Size":"S",
        "category":"Clothing"

    }
]
const Womendata=[
    {
        "id":1,
        "name":"Men's T-Shirt",
        "brand":"Puma",
        "Price":3456,
        "Color":"Black",
        "Size":"M",
        "category":"Clothing",
    },
        {
            "id":2,
            "name":"Men's T-Shirt",
            "brand":"Puma",
            "Price":3456,
            "Color":"red",
            "Size":"S",
            "category":"Clothing"
    
        }
    ]

const Server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.statusCode=200;
        res.setHeader("Content-type",'text/plain');
        res.end("Welcome to Men & Women Dummy Data")
    }else if(req.url=="/men"){
        res.statusCode=200;
        res.setHeader("content-type","document/json");
        res.end(JSON.stringify(data));
    }else if(req.url=="/women"){
        res.statusCode=200;
        res.setHeader("content-type",'application/json');
        res.end(JSON.stringify(Womendata));
    }else if(req.url=="/other"){
        res.statusCode=200;
        res.setHeader("content-type","text/plain");
        res.end("Paage not found")
    }
})
Server.listen(3500,()=>{
    console.log("server started in port 3500")
})