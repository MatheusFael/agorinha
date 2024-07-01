const express = require("express")

const server = express()

server.get("/teste",(req, res) =>{
    res.send("Have mercy on me, Jesus")
    
})

server.get("/oi", (req,res)=>{
    res.sendFile(__dirname + "pages/oi.html")
})



server.listen(3000)