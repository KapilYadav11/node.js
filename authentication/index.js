const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "lkjhgfdsapoiuytrewq"

const app = express();
app.use(express.json())

const users = [];

const authMiddleware = async(req, res, next)=>{
    const token  = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username){
        next()
    } else{
        res.json({
            message:"You are not logged in"
        })
    }
     
}

app.post("/signup", (req, res)=>{
    
    
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:"You are signed up"
    })
    
    

})
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signin", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i = 0; i<users.length; i++){
       if(users[i].username === username && users[i].password === password){
        foundUser = users[i]
       }
    }

    if(!foundUser){
        res.send({
            message:"Credentials are incorrect"
        })
    } else{
        const token = jwt.sign({
            username
        }, JWT_SECRET)

         res.json({
        token:token
    })
    }
   

})

app.get("/me", authMiddleware, (req, res)=>{
    const token = req.headers.token;
    console.log(token);
    

    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username){
        let foundUser = null;
        for(let i = 0; i<users.length; i++){
            if(users[i].username === decodedData.username){
                foundUser = users[i]
            }

        }
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }

})

app.listen(3000, ()=>{
    console.log("server is on 3000 port");
    
    
})