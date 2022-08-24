const express=require('express')
const cors=require('cors')
const user_router = require('./routes/user.route')
require('./config/db')
const app= express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/user',user_router)

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html")
})

app.use((req,res,next)=>{
    res.status(400).json({message:'route not found'})
})
app.use((err,req,res,next)=>{
    res.status(500).json({message:'server error'})
})

module.exports=app