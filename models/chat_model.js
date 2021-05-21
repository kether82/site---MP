// import module `mongoose`
var mongoose = require('mongoose');


var chatSchema = new mongoose.Schema({
    conversationId:{
        type: Number,
        required: true
    },

    senderId: {

        type: Number,
        required: true
    },


    senderName: {

        type: String,
        required: true

    },

    receiverId: {

        type: Number,
        required: true

    },

    receiverName: {

        type: String,
        required: true

    },

    message: {

        type: String,
        required: true

    },


    time: {
        type: Date,
        default: Date.now
    }



});


module.exports = mongoose.model('Chat', chatSchema);


