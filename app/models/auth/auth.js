const {Sequelize,DataTypes}=require('sequelize');
const Sequelizes=new Sequelize(require('../../config/db').database);

const User=Sequelizes.define('user',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports=User;