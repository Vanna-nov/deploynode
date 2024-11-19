const bcript=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../../models/auth/auth');
const db=require('../../config/db');

exports.register= async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            res.status(400).json({
                message:"please provide username, email and password",
                data:[]
            });
        }else{
            const hashPassword=await bcript.hash(password,10);
            const user=await User.create({username,email,password:hashPassword})
            res.status(201).json({
                message:"user registered successfully!",
                data:user
            });
        }
        
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
exports.login= async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({where:{email}});
        if(!user){
            res.status(404).json({
                message:"Invalid email or password",
                data:[]
            });
        }

        const isValidPassword=await bcript.compare(password,user.password);
        if(!isValidPassword){
            res.status(404).json({
                message:"Invalid email or password",
                data:[]
            });
        }
        
        const token=jwt.sign({id:user.id},db.jwtSecret,{expiresIn:datetime.datetime.utcnow() + datetime.timedelta(days=365*100)});
        res.status(200).json({
            token,
            data:user
        });
    }catch(error){
        res.status(500).json({error:error.message});
    }
}