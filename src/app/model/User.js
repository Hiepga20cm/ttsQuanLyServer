const mongoose = require('mongoose');
const { Schema } = mongoose;


const User = new Schema({
    userName: { type: String },
    passWord: { type: String, minlength: 8 },
    permissions:{ type: String}
},
    { timestamps: true }
);

module.exports = mongoose.model('User', User, 'User');
