// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const Chat = require('../models/chat_model.js');


/*
    defines an object which contains functions executed as callback
    when a client requests for `chat` paths in the server
*/
const  chatController = {

    getConversation: function (req, res) {
        var user_id = (req.params.user_id).toString();
        var query = {senderId : user_id};
        console.log(query);
        db.findMany(Chat, {}, "", function (result) {
            console.log(result);
            
            var convo = result.conversationId;
            db.findMany(Chat, {conversationId : convo}, "",(result)=>{
                var details = {};
                if(result!=null){

                    details.conversation = result.map(arr => ({
                        "start_end" : 'start',
                        'person' : 'you',
                        'message' : arr['message']
                    }));

                    details.contacts = result.map(arr =>({
                        "name" : arr['receiverName']
                    }));


                    if(user_id === result.senderId){
                        details.other_party = result.receiverName;
                    }else{
                        details.other_party = result.senderName;
                    }

                    res.render('chat',details);
                }else{
                    res.render('error');
                }
            })
        })
    }

}

module.exports = chatController;