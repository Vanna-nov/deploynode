const jwt=require('jsonwebtoken')
const db=require('../config/db')

module.exports=(req,res,next)=>{
    let token=req.headers.authorization
    token=token.slice(7);
    // console.log(token)
    if(!token){
        return res.status(401).json({error});
    }
    jwt.verify(token,db.jwtSecret,(error,decode)=>{
        if(error){
            return res.status(401).json({error:error});
        }
        req.decode=decode;
        next()
    });
}
