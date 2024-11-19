const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(require('../../config/db').database);

const WorkExperienceModel=sequelize.define('workexperiences',{
    JobTitle:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    Company:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    Location:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    StartDate:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    EndDate:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    Responsibilities:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
});

module.exports=WorkExperienceModel;