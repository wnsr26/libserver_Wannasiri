const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const auth = require('../middleware/auth');


router.get("/",bookController.getbook);
router.get("/:id",bookController.getBookById)
router.post("/add" ,bookController.addBook);
router.put("/:id",bookController.updateBook);

router.delete("/:id",bookController.deleteBook);


module.exports= router;