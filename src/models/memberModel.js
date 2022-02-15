const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-Validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    // _id: "fv0megivtgtk,519vvf" id จะสร้างขึ้นเอง
    member_id:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
    
},{
        timeseries:true
});
memberSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}
memberSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}
memberSchema.methods.generateJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}
module.exports = mongoose.model("Member", memberSchema);
memberSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});