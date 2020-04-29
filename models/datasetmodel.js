const mongoose = require('../connection');
const Schema = mongoose.Schema;

const userschema = new Schema({
    name : String,
    username : String,
    password : String,
    email : String
})

const datasetmodel = mongoose.model('user' , userschema);

module.exports = datasetmodel;