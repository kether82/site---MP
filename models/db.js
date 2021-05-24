
// import module `mongoose`
require('dotenv').config();
const mongoose = require('mongoose');

// import module `User` from `../models/UserModel.js`
const User = require('./user_model.js');
const Comment = require('./comment_model.js');
const Listing = require('./listing_model.js');

// ccapdev-mongoose is the name of the database
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/market_place' 
// const url = 'mongodb://localhost:27017/market_place' 
// additional connection options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
// copy from mco3
// defines an object which contains necessary database functions
const database = {
    connect: function () {
        mongoose.connect(url, options, function (error) {
            if (error) throw error;
            console.log('Connected to: ' + url);
        });
    },

    insertOne: function (model, doc, callback) {
        model.create(doc, function (error, result) {
            if (error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },

    insertMany: function (model, docs, callback) {
        model.insertMany(docs, function (error, result) {
            if (error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },

    findOne: function (model, query, projection, callback) {
        model.findOne(query, projection, function (error, result) {
            if (error) return callback(false);
            return callback(result);
        });
    },

    findMany: function (model, query, projection, callback) {
        model.find(query, projection, function (error, result) {
            if (error) return callback(false);
            return callback(result);
        });
    },

    updateOne: function (model, filter, update, callback) {
        model.updateOne(filter, update, function (error, result) {
            if (error) return callback(false);
            console.log('Document modified: ' + result.nModified);
            return callback(true);
        });
    },

    updateMany: function (model, filter, update, callback) {
        model.updateMany(filter, update, function (error, result) {
            if (error) return callback(false);
            console.log('Documents modified: ' + result.nModified);
            return callback(true);
        });
    },

    deleteOne: function (model, conditions, callback) {
        model.deleteOne(conditions, function (error, result) {
            if (error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    },

    deleteMany: function (model, conditions, callback) {
        model.deleteMany(conditions, function (error, result) {
            if (error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    }
}

/*
    exports the object `database` (defined above)
    when another script exports from this file
*/
module.exports = database;
