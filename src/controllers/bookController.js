const res = require('express/lib/response');
const Book = require('../models/bookModel');

exports.getbook = async(req,res)=>{
    Book.find()
    .exec((err,result)=>{
        res.status(200).json({
            msg:"OK",
            data: result
        });
    });
}

exports.getBookById = async (req, res) => {
    Book.findById(req.params.id)     //find product by id
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.addBook = async(req , res)=>{
    try {
        let book = new Book({
            book_id:req.body.book_id,
            name:req.body.name,
            author:req.body.author,
            publisher:req.body.publisher,
            price:req.body.price

        });
        //fields password in html hass password first
        // staff.password = await staff.hashPassword(req.body.password);

        let createBook = await book.save();

        res.status(200).json({
            msg:"Add Book OK",
            data: createBook
        });



    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            error:error
        });
    }
}

exports.updateBook = async (req,res)=>{
    let book = {
        name : req.body.name,
        author : req.body.author,
        publisher : req.body.publisher,
        price : req.body.price
    };
    Book.findByIdAndUpdate(req.params.id, book)
        .exec((err, result) => {
            Book.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};


exports.deleteBook = async (req, res) => {
    Book.findByIdAndDelete(req.params.id)
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