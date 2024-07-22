const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./studentschema');

// Connecting to database
const query = 'mongodb+srv://akhilatelukuntla0411:k50vK9sK3NssQ4bi@cluster0.9jbrpmf.mongodb.net/devDB'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db);
console.log('connected to db')
module.exports = router;
