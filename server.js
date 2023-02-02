const express = require('express')
const port = 3000
const rotas = require("./routes/rotas.js")

const app = express()

app.use("/",rotas)

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html")
})

app.listen(port, () => {console.log("[+] server started!")})