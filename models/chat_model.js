// import module `mongoose`
var mongoose = require('mongoose');


var chatSchema = new mongooseSchema
({

    senderId:{
            
        type:String,
        required: true
    },


    senderName:{

        type:String,
        required: true

    },

    receiverId:{

        type:String,
        required: true

    },

    receiverName:{

        type:String,
        required: true

    },
   
    message:{

        type:String,
        required: true

    },


    time: Date



});


module.exports = mongoose.model('Chat', UserSchema);


