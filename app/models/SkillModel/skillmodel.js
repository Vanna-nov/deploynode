const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(require('../../config/db').database);

const SkillModel=sequelize.define('skills',{
    SkillName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    Proficiency:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
});

module.exports=SkillModel;