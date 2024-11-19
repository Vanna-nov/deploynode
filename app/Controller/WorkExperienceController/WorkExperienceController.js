//const multer = require('multer');
const WorkExperienceModel=require('../../models/WorkExperienceModel/workexperiencemodel');
// const path = require('path');
// const { error } = require('console');

exports.getWorkExperience= async(req,res)=>{
    try{
        const WorkExperience= await WorkExperienceModel.findAll();
        if(WorkExperience !=null){
            res.status(200).json({
                    "status":200,
                    "data":WorkExperience,
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


exports.CreateWorkExperience= async(req,res)=>{
        try{
                const {JobTitle,Company,Location,StartDate,EndDate,Responsibilities}=req.body;
                if(JobTitle==null || Company==null || Location==null || Responsibilities==null){
                    res.status(400).json({
                        message:"please provide Data.",
                        status:400
                    })
                }
                const WorkExperience=await WorkExperienceModel.create({
                    JobTitle,Company,Location,StartDate,EndDate,Responsibilities
                });
                res.status(201).json({
                    message:"Create Successfully",
                    data:WorkExperience
                })
        }catch(error){
            res.status(500).json({error:error.message});
        }
}

exports.updateWorkExperience= async(req,res)=>{
    try{
        const {id}=req.params;
        const {JobTitle,Company,Location,StartDate,EndDate,Responsibilities}=req.body;
            const WorkExperience=await WorkExperienceModel.findByPk(id);
            if(WorkExperience==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await WorkExperience.update({
                    JobTitle,Company,Location,StartDate,EndDate,Responsibilities
                });
                res.status(200).json({
                    message:"Update Success",
                    status:200, 
                    data:WorkExperience
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.deleteWorkExperience= async(req,res)=>{
    try{
        const {id}=req.params;
            const WorkExperience=await WorkExperienceModel.findByPk(id);
            if(WorkExperience==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await WorkExperience.destroy();
                res.status(200).json({
                    message:"Delete Success",
                    status:200,
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}