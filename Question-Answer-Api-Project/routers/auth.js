const express = require("express");
// const {register,errorTest}=require('../controllers/auth');
// const {register,tokentest}=require('../controllers/auth');
const {
    register, 
    getUser, 
    login, 
    logout, 
    imageUpload,
    forgotPassword,
    resetPassword,
    editDetails
} = require('../controllers/auth');
const { getAccessToRoute } = require('../middleware/authorization/auth');
const profileImageUpload = require("../middleware/libraries/profileImageUpload");
const router = express.Router();
// router.get("/tokentest",getAccessToRoute,tokentest)
// router.get("/error",errorTest)

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.post("/upload", [getAccessToRoute, profileImageUpload.single("profile_image")], imageUpload);
router.post("/forgotpassword",forgotPassword)
router.put("/resetpassword",resetPassword);
router.put("/edit",getAccessToRoute,editDetails);


module.exports = router;