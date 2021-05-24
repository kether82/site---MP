/*
    This script creates the database
    and inserts 8 user details in the collection `profiles`
*/

// import module from `./models/db.js`
const db = require('./models/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
/*
    name of the collection (table)
    to perform CRUD (Create, Read, Update, Delete) operations
*/
let collection;

/*
    calls the function createDatabase()
    defined in the `database` object in `./models/db.js`
*/
db.createDatabase();



collection = 'comments';
console.log(collection);
for (var i = 0; i < 6; i++) {
    var comment = {
        comment_id: 100 + i,
        poster: 1000 + i,
        description: 'description' + i,
        listing_id: 10000 + i
    }
    db.insertOne(collection, comment);
}

collection = 'listings';
console.log(collection);
for (var i = 0; i < 6; i++) {
    var listing = {
        listing_id: 10000 + i,
        name: 'name' + i,
        description: 'description' + i,
        owner: 1000 + i,
    }
    db.insertOne(collection, listing);
}

collection= 'users';
console.log(collection);
for (var i = 1; i < 6; i++) {
    var pw = 'password'+i;
    var user = {
        user_id: 1000 + i,
        user_name: 'username' + i,
        full_name: 'firstname_lastname' + i,
        rating: [],
        description: 'description' + i,
        contact_number: i
    }
    user.pw = bcrypt.hashSync(pw, saltRounds);
    db.insertOne(collection,user);
}

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

