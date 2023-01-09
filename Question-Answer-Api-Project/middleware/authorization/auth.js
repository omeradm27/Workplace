const CustomError = require('../../helpers/error/CustomError')
const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessTokenFromHeader } = require('../../helpers/authorization/tokenHelpers');
const asyncErrorWrapper = require("express-async-handler");
const User=require("../../models/User");
const Question=require("../../models/Question");
const Answers = require('../../models/Answers');

const getAccessToRoute = (req, res, next) => {
    //console.log("-------------1");

    //Token
    const { JWT_SECRET_KEY } = process.env;
    // console.log(req.headers.authorization);
    // 401--->Unaouthorized,403--->Forbidden
    if (!isTokenIncluded(req)) {
        return next(new CustomError("You are not authorized to access this route", 401));
    }
    const accessToken = getAccessTokenFromHeader(req);
    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new CustomError("You Are not authorized to access this route", 401));
        }
        req.user = {
            id: decoded?.id,
            name: decoded.name
        }
        // console.log(decoded.params);
        next();
    });
    // CustomError
};
const getAdminAccess = asyncErrorWrapper(async (req, res, next) => {
    // console.log("-------------");

    const {id}=req.user;
    const user=await User.findById(id);
    if(user.role!=="admin"){
        return next(new CustomError("Only Access admin can access this route",403));
    }
    // console.log("getAdminAccess çalıştı");
    next();
});
const getQuestionOwnerAccess = asyncErrorWrapper(async (req, res, next) => {

    const userId=req.user.id;
    const questionId=req.params.id;
    const question=await Question.findById(questionId);
   
    if(question.user!=userId){
        return next(new CustomError("Only Owner can handle this operation",403));
    }
    next();
});
const getAnswerOwnerAccess = asyncErrorWrapper(async (req, res, next) => {

    const userId=req.user.id;
    const answerId=req.params.answer_id;
    const answer=await Answers.findById(answerId);
   
    if(answer.user!=userId){
        return next(new CustomError("Only Owner can handle this operation",403));
    }
    next();
});

module.exports = {
    getAccessToRoute,
    getAdminAccess,
    getQuestionOwnerAccess,
    getAnswerOwnerAccess
};