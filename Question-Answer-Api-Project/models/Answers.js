const mongoose = require('mongoose');
const Question = require('./Question');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    content: {
        type: String,
        required: [true, "Please Provide a content"],
        minlength: [10, "Please provide a content at least 10 characters"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    question: {
        type: mongoose.Schema.ObjectId,
        ref: "Question",
        required: true
    }
});
AnswerSchema.pre("save", async function (next) {
    if (!this.isModified("user")) return next();
    try {
        console.log(typeof this.question, this.question);
        const question = await Question.findById(this.question);
        question.answers.push(this._id);
        question.answerCount=question.answers.length;
        await question.save();
        next();
    } catch (err) {
        return next(err);
    }
});
module.exports = mongoose.model("Answers", AnswerSchema);