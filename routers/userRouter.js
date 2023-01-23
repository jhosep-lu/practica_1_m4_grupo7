const express = require("express");
const userRouter = express.Router();
const {getAllUsers,addUser,getUserId,updateUserId,deleteUserId} = require("../controllers/User")
userRouter
    .route("/")
    .get(getAllUsers)
    .post(addUser);

userRouter
    .route("/:id")
    .get(getUserId)
    .put(updateUserId)
    .delete(deleteUserId);

module.exports = userRouter;