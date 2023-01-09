const Question = require("../models/Question")
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const getAllQuestions = asyncErrorWrapper(async (req, res, next) => {
   
    return res.status(200).json(res.queryResult);
});

const askNewQuestion = asyncErrorWrapper(async (req, res, next) => {
    const info = req.body;
    const question = await Question.create({
        ...info,
        user: req.user.id
    });
    res.status(200).json({
        success: true,
        data: question
    });
});
const getTheQuestion = asyncErrorWrapper(async (req, res, next) => {
 
    res.status(200).json(res.queryResult);

});
const editTheQuestion = asyncErrorWrapper(async (req, res, next) => {
    // console.log("---------------------");
    const { id } = req.params;
    const { title, content } = req.body;
    let question = await Question.findById(id);
    question.title = title;
    question.content = content;
    question = await question.save();

    return res.status(200)
        .json({
            success: true,
            data: question
        });
});
const deleteQuestion = asyncErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const question = await Question.findByIdAndDelete(id);
    return res.status(200)
        .json({
            success: true,
            message: `ID: ${id} Title: ${question.title} has been deleted`
        });

});
const likeQuestion = asyncErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const question = await Question.findById(id);
    //like etmişse
    if (question.likes.includes(req.user.id)) {
        return next(new CustomError("You have already liked this question", 400))
    }
    question.likes.push(req.user.id);
    question.likeCount=question.likes.length;
    await question.save();
    return res.status(200)
        .json({
            success: true,
            data: question
        });
});
const undolikeQuestion = asyncErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const question = await Question.findById(id);
    //like etmemişse
    if (!question.likes.includes(req.user.id)) {
        return next(new CustomError("You cannot undo like operation", 400))
    }
    const index = question.likes.indexOf(req.user.id);
    question.likes.splice(index, 1);
    question.likeCount=question.likes.length;

    await question.save();
    return res.status(200)
        .json({
            success: true,
            data: question
        });
});
module.exports = {
    getAllQuestions,
    askNewQuestion,
    getTheQuestion,
    editTheQuestion,
    deleteQuestion,
    likeQuestion,
    undolikeQuestion

}