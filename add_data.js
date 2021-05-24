/*
    This script creates the database
    and inserts 8 user details in the collection `profiles`
*/

// import module from `./models/db.js`
const db = require('./models/db2.js');
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
db.createDatabase();

collection= 'users';
console.log(collection);
    let users = [

        {
            user_id: 1000,
            user_name: 'patpat' ,
            full_name: 'Sage',
            rating: [],
            description: 'I am not just your healer' ,
            contact_number: 0918,
            pw : '123'
        },

        {
            user_id: 1001,
            user_name: 'tico',
            full_name: 'Kyle chua' ,
            rating: [],
            description: 'egg' ,
            contact_number: 0919,
            pw : '123'
        },

        {
            user_id: 1002 ,
            user_name: 'normie',
            full_name: 'Patrick Ong' ,
            rating: [],
            description: 'kekw' ,
            contact_number:0920 ,
            pw : '123'
        },

        {
            user_id: 1003 ,
            user_name: 'Kitir',
            full_name: 'Junedel de leon' ,
            rating: [],
            description: 'description' ,
            contact_number: 0921,
            pw : '123'
        },

        {
            user_id: 1004 ,
            user_name: 'Vonchon',
            full_name: 'Von Rodriguez' ,
            rating: [],
            description: 'description' ,
            contact_number: 0922,
            pw : '123'
        }
    ]

    users[0].pw = bcrypt.hashSync(users[0].pw,saltRounds);
    users[1].pw = bcrypt.hashSync(users[1].pw,saltRounds);
    users[2].pw = bcrypt.hashSync(users[2].pw,saltRounds);
    users[3].pw = bcrypt.hashSync(users[3].pw,saltRounds);
    users[4].pw = bcrypt.hashSync(users[4].pw,saltRounds);
    db.insertMany(collection, users);

    collection = 'comments';

    let comments = [
        {
            comment_id : 100,
            poster: 1004,
            description : "The seller was very kind and the product was a good deal !! 10/10 deal",
            lisitng_id : 1000,
            poster_name: "normie"
        },
        {
            comment_id : 101,
            poster: 1001,
            description: "I want to buy it !! but I only have 40 pesos :(",
            listing_id: 1001,
            poster_name: "patpat"
        },
        {
            comment_id : 102,
            poster: 1001,
            description: "scammas 0/10",
            listing_id: 1005,
            poster_name: "patpat"
        },
        {
            comment_id : 103,
            poster: 1005,
            description: "very good product!! very legit no scam 100% TRUST",
            listing_id: 1005,
            poster_name: "pepogikotalaga" 
        },
        {
            comment_id : 104,
            poster: 1002,
            description: "Can I swap it with my blue H&M Hoodie ?",
            listing_id: 1001,
            poster_name: "tico"
        }
    ]

    db.insertMany(collection,comments);

    collection = "listings";

    let listings =[
        {
            name: "H&M Blue Hoodie",
            description: "1k used",
            listing_id: 1000,
            owner: 1002,
            image: ""
        },
        {
            name: "MSI GF63",
            description: "Never used, RFS: God a PC, Selling for 70k Negotiable",
            listing_id: 1001,
            owner: 1004,
            image: ""
        },
        {
            name: "Intel Core i9",
            description: "50k, used",
            listing_id: 1002,
            owner: 1001,
            image: ""
        },
        {
            name: "Iphone 9",
            description: "70k, 128GB, Price Negotiable",
            listing_id: 1003,
            owner: 1003,
            image: ""
        },
        {
            name: "addidas ultra boost 20",
            description: "discounted price: 4k",
            listing_id: "1004",
            owner: 1001,
            image: ""
        },
        {
            name: "(LEGIT) Nike Airforce 1",
            description: "3k Brandnew",
            listing_id: "1005",
            owner: 1002,
            image: ""
        }
    ]
    db.insertMany(collection, listings);

        


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

