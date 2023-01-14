const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = Schema({
    name: {type: String},
    phone: {type: String},
    classType: {type: String},
    image: {type: String},
}, { timestamps: true });

const student = mongoose.model('student', StudentSchema)
module.exports = student;