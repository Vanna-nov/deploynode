const PersonalInfoModel=require('../../models/PersonalInfoModel/personalInfomodel');
const multer = require('multer');
const path = require('path');
const { error } = require('console');

exports.getPersonalInfo= async(req,res)=>{
    try{
        const PersonalInfo= await PersonalInfoModel.findAll();
        if(PersonalInfo !=null){
            res.status(200).json({
                    "status":200,
                    "data":PersonalInfo,
            })
        }else{
            res.status(404).json(
                {
                    "data":[],
                }
            )
        }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

// upload image
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage:storage
}).single('FileImage');

exports.CreatePersonalInfo= async(req,res)=>{
    upload(req,res,async function(err){
        if(err instanceof multer.MulterError){
            return res.status(500).json({error:err.message});
        }else if(err){
            return res.status(500).json({error:err.message});
        }
        const {FullName,Email,Phone,LinkedInProfile,GitHubProfile,YouTubeProfile,FacebookProfile,Website,Address,Summary}=req.body;
            if(FullName==null || Email==null){
                res.status(400).json({
                    message:"please provide fullname and email.",
                    status:400
                })
            }
        const {filename:ImageFileName,path:ImagePath}=req.file;
        try{
                const PersonalInfo=await PersonalInfoModel.create({
                    FullName,Email,Phone,LinkedInProfile,GitHubProfile,YouTubeProfile,FacebookProfile,Website,ImageFileName,ImagePath,Address,Summary
                });
                res.status(201).json({
                    message:"Create Successfully",
                    data:PersonalInfo
                })
        }catch(error){
            res.status(500).json({error:error.message});
        }
    });
}

exports.updatePersonalInfo= async(req,res)=>{
    try{
        const {id}=req.params;
        const {FullName,Email,Phone,LinkedInProfile,GitHubProfile,YouTubeProfile,FacebookProfile,Website,Address,Summary}=req.body;
            const PersonalInfo=await PersonalInfoModel.findByPk(id);
            if(PersonalInfo==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await PersonalInfo.update({FullName,Email,Phone,LinkedInProfile,GitHubProfile,YouTubeProfile,FacebookProfile,Website,Address,Summary});
                res.status(200).json({
                    message:"Update Successfully",
                    status:200,
                    data:PersonalInfo
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.deletePersonalInfo= async(req,res)=>{
    try{
        const {id}=req.params;
            const PersonalInfo=await PersonalInfoModel.findByPk(id);
            if(PersonalInfo==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await PersonalInfo.destroy();
                res.status(200).json({
                    message:"Delete Success",
                    status:200,
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}