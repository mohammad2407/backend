
const User = require('../models/user.model')
const newToken = require('../common/json-token')
const signup = async(req,res) =>{

    try {
        let user = await User.findOne({email:req.body.email}).lean().exec();

        if(!user){
            user = await User.create(req.body);

            const token = newToken(user);

            console.log(token,"User Token is generated")
 
            res.status(201).send({user,token})
        }
        else return res.status(201).send("Please enter another email")
    } catch (error) {
        res.status(400).send(error.message)
    }
}


const signIn = async( req,res ) => {

    try {
        const user = await User.findOne({email:req.body.email});
        console.log(user);

        if(user){
            match = await user.checkPassword(req.body.password);

            // if there is no match password is wrong
            if(!match){
                return res.status(400).json({
                    status: "failed",
                    message: "Please provide the correct email address and password"
                })
            }
            //if match exists create new token
            const token = newToken(user)
            return res.status(201).send({user,token})
        }
        else{
            res.status(400).send({ message: "Please try another email or password"})
        }

    } catch (error) {
        res.status(500).send({ message: error.message, status: "failed" })
    }
}

module.exports = {signIn,signup}
