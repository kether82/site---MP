/*
    This script creates the database
    and inserts 8 user details in the collection `profiles`
*/

// import module from `./models/db.js`
const db = require('./models/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userModel= require('./models/user_model');
/*
    name of the collection (table)
    to perform CRUD (Create, Read, Update, Delete) operations
*/
let collection;

/*
    calls the function createDatabase()
    defined in the `database` object in `./models/db.js`
*/
db.connect();



// collection = 'comments';
// console.log(collection);
// for (var i = 0; i < 6; i++) {
//     var comment = {
//         comment_id: 100 + i,
//         poster: 1000 + i,
//         description: 'description' + i,
//         listing_id: 10000 + i
//     }
//     db.insertOne(collection, comment);
// }

// collection = 'listings';
// console.log(collection);
// for (var i = 0; i < 6; i++) {
//     var listing = {
//         listing_id: 10000 + i,
//         name: 'name' + i,
//         description: 'description' + i,
//         owner: 1000 + i,
//     }
//     db.insertOne(collection, listing);
// }

collection= 'users';
console.log(collection);
   
    

    // var pw = 'password'+i;
    // var user = {
    //     user_id: 1000 + i,
    //     user_name: ,
    //     full_name: 'firstname_lastname' + i,
    //     rating: [],
    //     description: 'description' + i,
    //     contact_number: i
    // }

    // user.pw = bcrypt.hashSync(pw, saltRounds);
    // db.insertOne(collection,user[]);


    let users = [

        {
            user_id: 1000,
            user_name: 'mountain' ,
            full_name: 'Sage',
            rating: [],
            description: 'I am not just your healer' ,
            contact_number: 0918,
            pw : 'password0'
        },

        {
            user_id: 1001,
            user_name: 'tico',
            full_name: 'Kyle chua' ,
            rating: [],
            description: 'egg' ,
            contact_number: 0919,
            pw : 'password1'
        },

        {
            user_id: 1002 ,
            user_name: 'patchon',
            full_name: 'Patrick Ong' ,
            rating: [],
            description: 'kekw' ,
            contact_number:0920 ,
            pw : 'password2'
        },

        {
            user_id: 1003 ,
            user_name: 'Junidel',
            full_name: 'Junedel de leon' ,
            rating: [],
            description: 'description' ,
            contact_number: 0921,
            pw : 'password3'
        },

        {
            user_id: 1004 ,
            user_name: 'Vonchon',
            full_name: 'Von Rodriguez' ,
            rating: [],
            description: 'description' ,
            contact_number: 0922,
            pw : 'password4'
        }
    ]

    users[0].pw = bcrypt.hashSync(users[0].pw,saltRounds);
    users[1].pw = bcrypt.hashSync(users[1].pw,saltRounds);
    users[2].pw = bcrypt.hashSync(users[2].pw,saltRounds);
    users[3].pw = bcrypt.hashSync(users[3].pw,saltRounds);
    users[4].pw = bcrypt.hashSync(users[4].pw,saltRounds);

    // db.insertMany(userModel,users, function(result){

    //          if(result)
    //          console.log('success');
                  

    // });
      
    db.insertOne(userModel,users[0],function(result){

        if(result)
          console.log('suc');
    });

// collection = 'chats';

// for (var i = 0; i < 6; i++) {
//     var chat = {
//         conversationId: 1000 + i,
//         senderId: 10 + i,
//         receiverId: 16 - i,
//         senderName: 'name' + i,
//         receiverName: 'namer' + i,
//         message: "text" + i
//     }
//     db.insertOne(collection, chat);
// }

