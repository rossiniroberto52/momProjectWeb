const express = require("express")
const rotas = express.Router()

let routesInfo = [
    {"index":"rotas"},
    {"index":"valores"}
]

rotas.get("/:indexs", (req,res) => {
    const index = req.params.indexs
    let indexI = routesInfo.find(i => i.index == index)
    if(!indexI){
        res.status(200).sendFile(__dirname+"/NotFound.html")
    }else if(indexI == {"index":"rotas"}){
        res.status(200).sendFile(__dirname+"/rotas.html")
    }else if(indexI == {"index":"valores"}){
        res.status(200).sendFile(__dirname+"/valores.html")
    }
})

module.exports = rotas