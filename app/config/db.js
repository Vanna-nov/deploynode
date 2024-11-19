require('dotenv').config();


module.exports = {
    database:{
        dialect:"mysql",
        host:process.env.DB_HOST,
        username:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    },
    jwtSecret: process.env.JWT_SECRET
}