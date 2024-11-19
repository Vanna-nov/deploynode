const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(require('../../config/db').database);

const ProjectsModel=sequelize.define('projects',{
    Title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Description:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    Technologies:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    ProjectLink:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    StartDate:{
        type:DataTypes.DATE,
        allowNull:true,
        unique:true
    },
    EndDate:{
        type:DataTypes.DATE,
        allowNull:true,
        unique:true
    },
    ImageFileName:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    ImagePath:{
        type:DataTypes.STRING,
        allowNull:true,
    }
});

module.exports=ProjectsModel;