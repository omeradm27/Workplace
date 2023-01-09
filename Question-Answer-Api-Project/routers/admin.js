const express = require("express");
const { getAccessToRoute,getAdminAccess} = require("../middleware/authorization/auth")
const {checkUserExist}=require("../middleware/database/databaseErrorHelpers")
const {blockUser,deleteUser}=require("../controllers/admin")
const router = express.Router();
//Admin Yetkisi var mı
router.use([getAccessToRoute,getAdminAccess]);
//User kontrolü için daha önce yazılan middleware ile kontrol
//Block User 
router.get("/block/:id",checkUserExist,blockUser);

//Delete User
router.delete("/user/:id",checkUserExist,deleteUser);

// Admin Çalışması Testi
router.get("/",(req,res,next)=>{
    res.status(200)
    .json({
        success:true,
        message:"Admin Page"
    })
});

module.exports = router;