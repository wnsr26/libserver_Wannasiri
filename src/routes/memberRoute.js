const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const auth = require('../middleware/auth');


router.get("/",memberController.getMember);

router.post("/add" ,memberController.addMember);
router.put("/:id",memberController.updateMember);

router.delete("/:id",memberController.deleteMember);


module.exports= router;