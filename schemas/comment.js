const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    commentsId: {
        type: Number,
        required: true,
        unique: true
    },
    postId: {
        type: Number,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Comment", commentSchema);