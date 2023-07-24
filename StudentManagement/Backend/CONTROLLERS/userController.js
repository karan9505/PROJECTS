const credential = require('../MODELS/credential.js');

const user=async (req,res)=>{
    console.log(req.body);
    res.send("Hello");
    res.end();
}

const userLogin=async (req,res)=>{
    res.send("User Login");
    res.end();
}

const userSignup=async (req,res)=>{
    res.send("User Signup");
    res.end();
}

const userUpdate=async (req,res)=>{
    res.send("User Update");
    res.end();
}

const userSearch=async (req,res)=>{
    let data=await credential.find(
        {
            "$or":[
                {"firstName":{$regex:req.body.key}}
            ]
        }
    )
    res.send(data)
}



module.exports={
    user:user,
    userLogin:userLogin,
    userSignup:userSignup,
    userUpdate:userUpdate,
    userSearch:userSearch
}