const {default:mongoose} = require('mongoose')

// const url = "mongodb+srv://Mohammad:Mohammad1234@user-cluster.kgiwc6b.mongodb.net/UsersDB";
const connect = () =>{
    return mongoose.connect("mongodb+srv://Mohammad:Mohammad1234@user-cluster.kgiwc6b.mongodb.net/UsersDB")
}

module.exports = connect;
