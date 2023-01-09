const User = require("../../models/User");
const CustomError = require("../../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const Question = require("../../models/Question");
const Answer = require("../../models/Answers");
const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
    // console.log("------------------------");

    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
        return next(new CustomError("There is no such user with that id", 400));
    }
    next();
});
const checkQuestionExist = asyncErrorWrapper(async (req, res, next) => {
    // console.log("------------------------2");

    const question_id = req.params.id || req.params.question_id;
    const question = await Question.findById(question_id);

    if (!question) {
        return next(new CustomError("There is no such a question", 400));
    }
    next();
});
const checkQuestionAnswerExist = asyncErrorWrapper(async (req, res, next) => {
    // console.log("------------------------2");

    const question_id = req.params.question_id;
    const answer_id = req.params.answer_id;
    const answer = await Answer.findOne({
        _id: answer_id,
        question: question_id
    });

    if (!answer) {
        return next(new CustomError("There is no such a answer wtih that question id", 400));
    }
    next();
});
module.exports = {
    checkUserExist,
    checkQuestionExist,
    checkQuestionAnswerExist
}