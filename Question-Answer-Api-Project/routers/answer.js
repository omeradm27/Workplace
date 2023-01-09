const express = require("express");
const { getAccessToRoute, getAnswerOwnerAccess } = require("../middleware/authorization/auth");
const { checkQuestionAnswerExist } = require("../middleware/database/databaseErrorHelpers");
const {
    addNewAnswerToQuestion,
    getAllAnswersByQuestion,
    getSingleAnswer,
    editAnswer,
    deleteAnswer,
    likeAnswer,
    undolikeAnswer
} = require("../controllers/answer");
const router = express.Router({ mergeParams: true });

//Answer Router Test
// router.get("/", (req, res, next) => {
//     console.log(req.params);
//     res.send("Answer Route");
// });

router.post("/", getAccessToRoute, addNewAnswerToQuestion);
router.get("/", getAllAnswersByQuestion);
router.get("/:answer_id", checkQuestionAnswerExist, getSingleAnswer);
router.get("/:answer_id/like", [checkQuestionAnswerExist, getAccessToRoute ],likeAnswer);
router.get("/:answer_id/undo_like", [checkQuestionAnswerExist, getAccessToRoute ],undolikeAnswer);
router.put("/:answer_id/edit", [checkQuestionAnswerExist, getAccessToRoute, getAnswerOwnerAccess], editAnswer);
router.delete("/:answer_id/delete",
    [
        checkQuestionAnswerExist,
        getAccessToRoute,
        getAnswerOwnerAccess
    ],
    deleteAnswer
    );
module.exports = router;