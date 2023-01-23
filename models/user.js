const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        requird: true
    },
    phone:{
        type: String,
        required: true
    }

});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;