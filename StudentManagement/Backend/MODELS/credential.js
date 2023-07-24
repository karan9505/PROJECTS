const mongoose=require('mongoose');

const credentialSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },

    lastName:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    },

    userType:{
        type:Number,
        min:0,
        max:1
    }
})

module.exports=mongoose.model('credential',credentialSchema);