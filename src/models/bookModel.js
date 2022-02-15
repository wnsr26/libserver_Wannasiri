const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-Validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
},{
    timeseries:true   
});

module.exports = mongoose.model("Book", bookSchema);
bookSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});
