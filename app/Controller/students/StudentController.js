const e = require('express');
const Students=require('../../models/students/studentsModel');

exports.getStudents= async(req,res)=>{
    try{
        const students= await Students.findAll();
        if(students !=null){
            res.status(200).json({
                    "status":200,
                    "data":students,
            })
        }else{
            res.status(404).json(
                {
                    "data":students,
                }
            )
        }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
exports.createStudent= async(req,res)=>{
    try{
        const {name,phone}=req.body;
        if(name==null || phone==null){
            res.status(400).json({
                message:"please provide name and phone",
                status:400
            })
        }else{
            const student=await Students.create({name,phone});
            res.status(201).json({
                message:"Create Success",
                data:student
            })
        }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.updateStudent= async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,phone}=req.body;
            const student=await Students.findByPk(id);
            if(student==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await student.update({name,phone});
                res.status(200).json({
                    message:"Update Success",
                    status:200,
                    data:student
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.deleteStudent= async(req,res)=>{
    try{
        const {id}=req.params;
            const student=await Students.findByPk(id);
            if(student==null){
                res.status(404).json({
                    message:"Not Found",
                    status:404
                })
            }else{
                await student.destroy();
                res.status(200).json({
                    message:"Delete Success",
                    status:200,
                })
            }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}