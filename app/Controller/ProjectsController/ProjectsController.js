const multer = require('multer');
const ProjectsModel=require('../../models/ProjectsModel/projectsmodel');
const path = require('path');
const { error } = require('console');

exports.getProjects= async(req,res)=>{
    try{
        const Projects= await ProjectsModel.findAll();
        if(Projects !=null){
            res.status(200).json({
                    "status":200,
                    "data":Projects,
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


exports.CreateProjects= async(req,res)=>{
    upload(req,res,async function(err){
        if(err instanceof multer.MulterError){
            return res.status(500).json({error:err.message});
        }else if(err){
            return res.status(500).json({error:err.message});
        }
        const {Title,Description,Technologies,ProjectLink,StartDate,EndDate}=req.body;
            if(Title==null || Description==null){
                res.status(400).json({
                    message:"please provide title and description.",
                    status:400
                })
            }
        const {filename:ImageFileName,path:ImagePath}=req.file;
        try{
                const Projects=await ProjectsModel.create({
                    Title,Description,Technologies,ProjectLink,StartDate,EndDate,ImageFileName:ImageFileName,ImagePath:ImagePath
                });
                res.status(201).json({
                    message:"Create Successfully",
                    data:Projects
                })
        }catch(error){
            res.status(500).json({error:error.message});
        }
    });
}

exports.updateProjects= async(req,res)=>{
    try{
        const {id}=req.params;
        const {Title,Description,Technologies,ProjectLink,StartDate,EndDate,ImageFileName,ImagePath}=req.body;
            const Projects=await ProjectsModel.findByPk(id);
            if(Projects==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await Projects.update({Title,Description,Technologies,ProjectLink,StartDate,EndDate,ImageFileName,ImagePath});
                res.status(200).json({
                    message:"Update Success",
                    status:200, 
                    data:Projects
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.deleteProjects= async(req,res)=>{
    try{
        const {id}=req.params;
            const Projects=await ProjectsModel.findByPk(id);
            if(Projects==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await Projects.destroy();
                res.status(200).json({
                    message:"Delete Success",
                    status:200,
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}