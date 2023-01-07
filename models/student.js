const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = Schema({
    name: {type: String},
    other: {type: String},
    image: {type: String},
}, { timestamps: true });

const student = mongoose.model('student', StudentSchema)
module.exports = student;