const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./helpers/database/connectDB");
const customErrorHandler=require("./middleware/errors/customErrorHandler");
const path=require("path");

const routers = require("./routers");
// Environment Variables
dotenv.config({
    path: "./config/env/config.env"
});

// MONGODB Connection
connectDB();

//localhost:5000/api/question
//localhost:5000/api/auth

const app = express();//Express Yükleme
// Express-Body Middleware
app.use(express.json())
const PORT = process.env.PORT;

//ROUTERS MİDDLEWARE
// app.use("/api/questions",question);
// app.use("/api/auth",auth);
// app.use("/api/answers",auth);
//-------Bunların Yerine---->
app.use("/api", routers);
app.use(customErrorHandler);
//Static File
// console.log(__dirname);
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT, () => {
    console.log(`App Started on ${PORT}: ${process.env.NODE_ENV}`);
});
