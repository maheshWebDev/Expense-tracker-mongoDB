const User = require('../model/userModel');

module.exports.registerUser = async(req,res)=>{

    try {
        const {name,email,password} = req.body;

        console.log(name,email,password);
    
        const user = await User.create({name,email,password})
    
        res.status(200).json({"status":"success","message":"Successfully Register"});
    } catch (error) {
        res.status(401).json({"status":"fail",message:error.message});
    }
   
    
}