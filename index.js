const express = require('express');

const app = express();
 const users = [{
    name:"John",
    Kidney:[{
        healthy: false,
    }]
 }]
 app.use(express.json());

 app.get("/", (req, res)=>{
    const johnKidney  = users[0].Kidney;
    const numberOfKidney = johnKidney.length;
    let numberOfHealthyKidney = 0;
    for(let i = 0; i<johnKidney; i++){
        if(johnKidney[i].healthy){
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
 })

 app.post("/", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].Kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg: "done!"
    })
 })

 app.put("/", (req, res)=>{
    for(let i = 0; i<users[0].Kidney.length; i++){
        users[0].Kidney[i].healthy = true;
    }
    res.json({})
 })

 app.delete("/", (req, res)=>{
    const newKidney = [];
    for(let i = 0; i<users[0].Kidney.length; i++){
        if(users[0].Kidney.healthy){
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].Kidney = newKidney;
    res.json({
        msg:"DOne!"
    })
 })
app.listen(3000);