const express = require('express');
const app = express();


// function loggerMiddleware(req, res, next){
//     console.log("Method is" + req.method);
//     console.log("Url is" + req.url);
//     console.log(new Date());
//     next();
// }

// app.use(loggerMiddleware)
app.use(express.json());
app.post("/sum", (req, res)=>{
    console.log(req.body)
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send({
        ans: a+b
    })
})

app.get("/sum", (req, res)=>{
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);
   res.send({
    ans: a +b
   })
})

app.get("/multiply", ()=>{
    const a = req.query.a;
    const b = req.query.b;
    res.send({
        ans: a*b
    })
})

app.get("/divide", ()=>{
    const a  = req.query.a;
    const b = req.query.b;
    res.send({
        ans:a/b
    })
})

app.get("/substract", ()=>{
    const a = req.query.a;
    const b = req.query.b;
    res.send({
        ans: a-b
    })
})

app.listen(3000)