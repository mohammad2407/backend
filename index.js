const express = require("express");

const connect = require("./src/configs/db")
const userController = require('./src/controllers/user.controller')
const {signIn, signup} = require('./src/controllers/auth.controller')
const app = express()

app.use(express.json())

app.use('/users', userController)

app.post('/signIn', signIn)
app.post('/signup', signup)


app.listen(4003, async() =>{
    try{
        await connect();
        console.log("listening on port 4003")
    } catch(err){
        console.log(err.message)
    }
})

