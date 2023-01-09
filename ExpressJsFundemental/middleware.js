const accessControl = (req, res, next) => {
    const access = false;
    if (!access) {
        res.status(401).json({
            success: false,
            message: "You are not authorized"
        });
    }
    console.log("Middleware: Access Control");
    next();
}
const defaultMidware =(req,res,next)=>{
    console.log("Default Middleware");
    next();
}
module.exports = {
    accessControl,
    defaultMidware
}