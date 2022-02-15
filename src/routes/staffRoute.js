const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const auth = require('../middleware/auth');


router.get("/",staffController.getStaff);

router.post("/add" ,staffController.addStaff);
router.post("/login",staffController.login);
router.put("/:id",staffController.updateStaff);

router.delete("/:id",staffController.deleteStaff);


module.exports= router;