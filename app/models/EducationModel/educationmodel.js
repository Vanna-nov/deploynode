const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(require('../../config/db').database);

const EducationModel=sequelize.define('educations',{
    Degree:{
        type:DataTypes.STRING,
        allowNull:false
    },
    FieldOfStudy:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    School:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    Location:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    GraduationDate:{
        type:DataTypes.DATE,
        allowNull:false,
        unique:true
    },
});

module.exports=EducationModel;