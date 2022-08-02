const jwt = require('jsonwebtoken');
require('dotenv').config();

const newToken = (user) =>{
    console.log(process.env);
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

module.exports = newToken