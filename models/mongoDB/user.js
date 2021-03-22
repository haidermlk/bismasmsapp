const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    skey: String,
    roles: Array
});

module.exports = mongoose.model('User', userSchema);