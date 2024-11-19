const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(require('../../config/db').database);

const Student=sequelize.define('students',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports=Student;