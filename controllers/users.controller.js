const userModel = require("../models/user.model");
const User = require("../models/user.model");
exports.getUser=async (req,res)=>{
  
    try{
        const result = await userModel.find().select({
            _id:0,
        })
        res.status(200).send({
            result
        })
    }
    catch(err){
        res.status(500).json({
            message:'server error'
        })
    }
}

exports.getOneUser=async(req,res)=>{
    try{
const result =await userModel.findOne({_id:req.params.id})
res.status(200).json({
    result
})
    }
    catch(err){
        res.status(500).json({
            message:'server error'
        })
 
}
}

exports.createUser=async(req,res)=>{
   try{
    const result = new userModel(req.body)
    await result.save()
    res.status(200).json({
        message:'create user',
        result
    })
   }
   catch(err){
res.status(500).json({
    message:'server error'
})
   }
}

exports.updateUser=async(req,res)=>{

   try{
    const result = await userModel.findByIdAndUpdate({_id:req.params.id},
        {
            $set:{
                name:"diduif"
            }
        },
        {
            new:true,
            useFindAndModify:false,
        }
        )
        res.send(result)
   }
    catch(err){
        res.status(500).json({err})
        }
            
}

exports.deleteUser=async(req,res)=>{
try{
    const result = await userModel.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({
        result
    })
}
catch(err){
res.status(500).json({err})
}
    
}