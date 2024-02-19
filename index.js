// *** day 1 node

// const http = require('http');
// const { json } = require('stream/consumers');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello, World!\n');
// //   res.end(JSON.stringify({age:24}));
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
// *** day 1 express
// const express = require('express')
// const app=express()

// app.get('/',(req,res)=>{
//     res.send('hello shuru')
//     console.log("hello sir")
// })

// app.listen(5000,() =>{
// console.log("server is running");
// })


// day 2 node
const http = require('http');
const fs = require('fs')
const port = 4000;
http.createServer(async(req,res)=>{
    const urlParams=new URL(req.url,`http://${req.headers.host}`);
    const productid=urlParams.pathname.slice(1);
    console.log(productid)
    if(productid){
        try{
            const apiResponse=await fetch(`https://dummyjson.com/products/${productid}`)
            const productData=await apiResponse.json();

            const template = fs.readFileSync('./index.html','utf-8');
            const htmlContent=template
            .replace('*title*',productData.title)
            .replace('*price*',productData.price)
            .replace('*productImage*',productData.thumbnail)
            .replace('*description*',productData.description);

             res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(htmlContent)
        }catch(error){
            res.writeHead(500,{'Content-Type': 'text/plain'})
            res.end("error fetching product details")
        }
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'})
            res.end("product id not provide")
    }
}).listen(port,()=>{
console.log("server issues");
})
