const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const blockUser = asyncErrorWrapper(async (req, res, next) => {

    const { id } = req.params;
    const user = await User.findById(id);
    // console.log("blockUseriçi");
    user.blocked = !user.blocked;
    await user.save();

    return res.status(200)
    .json({
        success:true,
        // data:user,
        message:user.email+" Block - Unblock Succcesfull"

    });
});

const deleteUser= asyncErrorWrapper(async (req, res, next) => {
    const {id}=req.params;
    const user= await User.findById(id);
    await user.remove();//Post Remove Yapılacak
    return res.status(200).json({
        success:true,
        message:"Delete Operation Successfull"
    });
});
module.exports = {
    blockUser,
    deleteUser
};