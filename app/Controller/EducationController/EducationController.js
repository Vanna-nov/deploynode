//const multer = require('multer');
const EducationModel=require('../../models/EducationModel/educationmodel');
// const path = require('path');
// const { error } = require('console');

exports.getEducation= async(req,res)=>{
    try{
        const Education= await EducationModel.findAll();
        if(Education !=null){
            res.status(200).json({
                    "status":200,
                    "data":Education,
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
// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads/');
//     },
//     filename:function(req,file,cb){
//         cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({
//     storage:storage
// }).single('FileImage');


exports.CreateEducation= async(req,res)=>{
        try{
                const {Degree,FieldOfStudy,School,Location,GraduationDate}=req.body;
                if(Degree==null || FieldOfStudy==null || School==null || Location==null || GraduationDate==null){
                    res.status(400).json({
                        message:"please provide Data.",
                        status:400
                    })
                }
                const Education=await EducationModel.create({
                    Degree,FieldOfStudy,School,Location,GraduationDate
                });
                res.status(201).json({
                    message:"Create Successfully",
                    data:Education
                })
        }catch(error){
            res.status(500).json({error:error.message});
        }
}

exports.updateEducation= async(req,res)=>{
    try{
        const {id}=req.params;
        const {Degree,FieldOfStudy,School,Location,GraduationDate}=req.body;
            const Education=await EducationModel.findByPk(id);
            if(Education==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await Education.update({Degree,FieldOfStudy,School,Location,GraduationDate});
                res.status(200).json({
                    message:"Update Success",
                    status:200, 
                    data:Education
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.deleteEducation= async(req,res)=>{
    try{
        const {id}=req.params;
            const Education=await EducationModel.findByPk(id);
            if(Education==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await Education.destroy();
                res.status(200).json({
                    message:"Delete Success",
                    status:200,
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}