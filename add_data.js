/*
    This script creates the database
    and inserts 8 user details in the collection `profiles`
*/

// import module from `./models/db.js`
const db = require('./models/db2.js');

/*
    name of the collection (table)
    to perform CRUD (Create, Read, Update, Delete) operations
*/
let collection = 'users';

/*
    calls the function createDatabase()
    defined in the `database` object in `./models/db.js`
*/
db.createDatabase();

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
/*    user_id: {
        type:String,
        required: true
    },
    user_name:{
        type: String,
        required: true  
    },
    full_name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    pw: {
        type: String,
        required: true
    }
    */
// var user = {
//     user_id: 1001,
//     user_name: 'username1',
//     full_name: 'firstname_lastname',
//     rating: 2,
//     pw: 'password1'
// };

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
// db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
// var user = {
//     user_id: 10011,
//     user_name: 'username2',
//     full_name: 'firstname_lastname2',
//     rating: 2,
//     pw: 'password1'
// };

for(var i = 0; i<6; i++){
    var user = {
        user_id: 1001+i,
        user_name: 'username' + i,
        full_name: 'firstname_lastname' + i,
        rating: 2,
        pw: 'password1',
        description : 'description' + i
    }
    db.insertOne(collection, user);
}

collection = 'comments';
// comment_id:{
//     type: Number,
//     required: true
// },
// owner:{
//     type: Number,
//     required: true
// },
// description:{
//     type: String,
//     required: true
// }
for(var i = 0; i<6; i++){
    var comment = {
        comment_id: 100+i,
        poster : 1001+i,
        description : 'description' + i
    }
    db.insertOne(collection, comment);
}

collection = 'listings';

// listing_id:{
//     type: Number,
//     required: true
// },
// name:{
//     type: String,
//     required: true
// },
// description:{
//     type: String,
//     required: true
// },
// owner:{
//     type: Number,
//     required: true

for(var i = 0; i<6; i++){
    var listing = {
        listing_id: 10000+i,
        name : 'name' + i,
        description : 'description' + i,
        owner : 1001+i
    }
    db.insertOne(collection, listing);
}