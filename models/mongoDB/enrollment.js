const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnrollmentSchema = new Schema({
    code: String,
    descr: String,
    orgname: String,
    session: String,
    grade: String,
    comments: String
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);