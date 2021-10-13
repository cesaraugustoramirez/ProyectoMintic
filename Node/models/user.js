const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    email: String,
    rol: String,
    estado: String
})

module.exports = mongoose.model('users', UserSchema);