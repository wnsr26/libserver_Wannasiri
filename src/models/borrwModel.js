const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-Validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const borrowSchema = new Schema({
    borrower: {
        member_id: String,
        name: String
    },
    book: {
        book_id: String,
        name: String,
        author: String
    },
    borrowDate: { type: Date, default: Date.now },
    dueDate: Date,
    lender: {
        staff_id: String,
        name: String
    },
    receiver:{
        staff_id: String,
        name: String
    },
    returnedDate: Date  //returnedDate มีการคืนแล้ว
}, 
{ timestamps: true 

});
borrowSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}
borrowSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}
borrowSchema.methods.generateJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}
module.exports = mongoose.model("Borrow", borrowSchema);
borrowSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});
