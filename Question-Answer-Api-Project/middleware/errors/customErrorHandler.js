// Error Handler
const CustomError = require("../../helpers/error/CustomError")
const customErrorHandler = ((err, req, res, next) => {
    let customError = err;
    // console.log("Custom Error Handler");
    // console.log(err);
    if (err.name === "SyntaxError") {
        customError = new CustomError("Unexpected Syntax", 400);
    }
    if (err.name === "ValidationError") {
        customError = new CustomError(err.message, 400);
    }
    if (err.code === 11000) {
        customError = new CustomError("Duplicated Key Found :Check Your Input ", 400);

    }
    if(err.name==="CastError"){
        customError=new CustomError("Please provide a valid id")
    }
    res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
    // console.log(customError.message,customError.status);

    // res.status(400)
    //     .json({
    //         success: false
    //     })
});

module.exports = customErrorHandler;