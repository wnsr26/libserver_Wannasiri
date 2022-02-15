const res = require('express/lib/response');
const Member = require('../models/memberModel');

exports.getMember = async(req,res)=>{
    Member.find()
    .exec((err,result)=>{
        res.status(200).json({
            msg:"OK",
            data: result
        });
    });
}

exports.addMember = async(req , res)=>{
    try {
        let member = new Member({
            member_id:req.body.member_id,
            name:req.body.name,
            password:req.body.password,
            address:req.body.address,
            phoneNumber:req.body.phoneNumber

        });
        //fields password in html hass password first
        // staff.password = await staff.hashPassword(req.body.password);

        let createMember = await member.save();

        res.status(200).json({
            msg:"Add Staff OK",
            data: createMember
        });



    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            error:error
        });
    }
}

exports.updateMember = async (req,res)=>{
    // req.params.id = id ของ staff 
    // req.body = ข้อมูล staff ที่จะ update
    let member = {
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber
    };
    Member.findByIdAndUpdate(req.params.id,member)
    .exec((err,data)=>{
        // findById อีกรอบเพื่อเอา data ใหม่
        Member.findById(req.params.id)
        .exec((err,data)=>{
            data.password=null;
            res.status(200).json({
                msg: "OK",
                data: data
            });
        });
    });
};


exports.deleteMember = async (req, res) => {
    Member.findByIdAndDelete(req.params.id)
        .exec((err) => {
            if (err) {
                res.status(500).json({
                    msg: err
                });
            } else {
                res.status(200).json({
                    msg: "Delete complete"
                });
            }
        });
};