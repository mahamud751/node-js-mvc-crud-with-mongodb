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

userSchema.methods={
    findAge: function () {
        return mongoose.model('User').find({age:'22'})
    }
}

userSchema.statics={
    findWord: function () {
        return this.find({name:/in/i})
    }
}

userSchema.query={
    findText:function (language) {
        return this.find({name: new RegExp(language,"i")})
    }
}

module.exports=mongoose.model('User',userSchema)