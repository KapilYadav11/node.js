const express = require('express');
const app = express();

function isOldEnough(age){
    if(age>=18){
        return true;
    } else {
        return false;
    }
}

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age>=14){
        next()
    } else {
        res.send({
            msg:"Sorry you are not of age"
        })
    }
}



app.get("/ride2", isOldEnoughMiddleware, (req, res)=>{
        res.json({
            msg:"Ride 2 done succesfully"
        })
})


app.get("/ride1", isOldEnoughMiddleware, (req, res)=>{
        res.json({
            msg:"Ride 1 done succesfully"
        })
})

app.listen(3000)