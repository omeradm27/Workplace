const express = require("express");
const Question = require("../models/Question")
const {
    getAllQuestions,
    askNewQuestion,
    getTheQuestion,
    editTheQuestion,
    deleteQuestion,
    likeQuestion,
    undolikeQuestion
} = require('../controllers/question');
const {
    getAccessToRoute,
    getQuestionOwnerAccess
} = require("../middleware/authorization/auth");
const { checkQuestionExist
} = require("../middleware/database/databaseErrorHelpers");
const answer = require("./answer");
const questionQueryMiddleware = require("../middleware/query/questionQueryMiddleware");
const answerQueryMiddleware = require("../middleware/query/answerQueryMiddleware");

const router = express.Router();

router.get("/", questionQueryMiddleware(Question,
    {
        population: {
            path: "user",
            select: "name profile_image"
        }
    }), getAllQuestions);
router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/:id", checkQuestionExist, answerQueryMiddleware(Question,
    {
        population: [
            {
                path: "user",
                select: "name profile_image"
            },
            {
                path:"answers",
                select:"content"  
            }
        ]
    }), getTheQuestion);
router.put("/:id/edit", [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], editTheQuestion);
router.delete("/:id/delete", [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], deleteQuestion);
router.get("/:id/like", [getAccessToRoute, checkQuestionExist], likeQuestion);
router.get("/:id/undolike", [getAccessToRoute, checkQuestionExist], undolikeQuestion);
router.use("/:question_id/answers", checkQuestionExist, answer);

//api/quest_İd/


module.exports = router;