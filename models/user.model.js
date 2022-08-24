const  mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age:Number,
    date:{
        type:Date,
        default:Date.now,
    }
   
})

module.exports=mongoose.model('User',userSchema)