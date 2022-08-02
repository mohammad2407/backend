const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UserSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:Number, required:true}
},

{
    versionKey:false,
    timestamps:true
}
)

UserSchema.pre('save', function(next){
    if(!this.isModified("password"))return next();

   let hash =  bcrypt.hashSync(this.password,8)
   this.password = hash;
   return next()
})

UserSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}

const User = mongoose.model('user',UserSchema);

module.exports = User;