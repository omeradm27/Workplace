const express = require("express");
const { getSingleUser ,getAllUsers} = require("../controllers/user.js");
const { checkUserExist } = require("../middleware/database/databaseErrorHelpers");
const userQueryMiddleware=require("../middleware/query/userQueryMiddleware")
const User=require("../models/User")
const router = express.Router();

router.get("/",userQueryMiddleware(User), getAllUsers);
router.get("/:id", checkUserExist, getSingleUser);
module.exports = router;