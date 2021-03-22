const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarksCodeSchema = new Schema({
    code: String,
    descr: String,
    mline: [{
        subject: String,
        minmarks: String,
        maxmarks: String,
        marks: String
/*
        frequency: String,
        ptype: String,
        payval: String,
        amount: String */
    }],
    gmarks: String
});

module.exports = mongoose.model('MarksCode', MarksCodeSchema);