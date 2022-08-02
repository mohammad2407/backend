const express = require('express');

const route = express.Router()

const User = require('../models/user.model')

route.post('', async(req,res) =>{

    //posting users to the db;

    try {
        const user = await User.create(req.body);
        console.log(user)
        res.status(201).send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})


// gettting all the users from db;
route.get('', async(req,res) =>{
    try {
        const user = await User.find().lean().exec();
        res.status(201).send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

// finding the single user by id;

route.get('user/:userId', async(req,res) =>{
    
    try {
        const user = await User.findById().lean().exec()
        res.status(201),send(user)
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
})

// updating the user by Id;

route.patch('/user/:userId', async(req,res) =>{

    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body,{new:true}).lean().exec();
        res.status(201).send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

module.exports = route