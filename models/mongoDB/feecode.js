const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeeCodeSchema = new Schema({
    code: String,
    descr: String,
    bfees: String,
    line: [{
        frequency: String,
        ptype: String,
        payval: String,
        amount: String
    }],
    gamount: String
});

module.exports = mongoose.model('FeeCode', FeeCodeSchema);