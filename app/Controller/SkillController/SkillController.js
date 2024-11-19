//const multer = require('multer');
const SkillModel=require('../../models/SkillModel/skillmodel');
// const path = require('path');
// const { error } = require('console');

exports.getSkill= async(req,res)=>{
    try{
        const Skills= await SkillModel.findAll();
        if(Skills !=null){
            res.status(200).json({
                    "status":200,
                    "data":Skills,
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


exports.CreateSkill= async(req,res)=>{
        try{
                const {SkillName,Proficiency}=req.body;
                if(SkillName==null || Proficiency==null){
                    res.status(400).json({
                        message:"please provide Data.",
                        status:400
                    })
                }
                const Skills=await SkillModel.create({
                    SkillName,Proficiency
                });
                res.status(201).json({
                    message:"Create Successfully",
                    data:Skills
                })
        }catch(error){
            res.status(500).json({error:error.message});
        }
}

exports.updateSkills= async(req,res)=>{
    try{
        const {id}=req.params;
        const {SkillName,Proficiency}=req.body;
            const Skills=await SkillModel.findByPk(id);
            if(Skills==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await Skills.update({
                    SkillName,Proficiency
                });
                res.status(200).json({
                    message:"Update Success",
                    status:200, 
                    data:Skills
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.deleteSkills= async(req,res)=>{
    try{
        const {id}=req.params;
            const Skills=await SkillModel.findByPk(id);
            if(Skills==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await Skills.destroy();
                res.status(200).json({
                    message:"Delete Success",
                    status:200,
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}