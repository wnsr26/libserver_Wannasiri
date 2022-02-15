const express = require('express');
const app = express.Router();
const borrowController = require("../controllers/borrowController");


app.get("/member/:id", borrowController.getBorrowDataByMember);
app.get("/book/:id", borrowController.getBorrowDataByBook);
app.get("/", borrowController.getBorrows);
app.post("/", borrowController.borrowBook);

app.patch("/return/:id", borrowController.returnBook);

module.exports = app;