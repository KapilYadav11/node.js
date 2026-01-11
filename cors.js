const express = require('express')
const cors  = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

app.post("/sum", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send({
        ans: a + b
    })
})

app.listen(3000)