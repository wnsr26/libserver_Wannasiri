require('dotenv').config({ path: './config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const staffRoute = require("./src/routes/staffRoute");
const bookRoute = require("./src/routes/bookRoute");
const memberRoute = require("./src/routes/memberRoute");
const borrowRoute = require("./src/routes/borrowRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require("./db")(app);

app.use("/staff", staffRoute);
app.use("/book", bookRoute);
app.use("/member", memberRoute);
app.use("/borrow", borrowRoute);

app.get("/",(req, res)=>{
    res.send("Hello from index ");
});

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});
