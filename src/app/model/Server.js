const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete');


const Server = new Schema({
    name: { type: String },
    password: { type: String, minlength: 8 },
    status: { type: Boolean },
    ram: { type: String },
    disk: { type: String },
},
    { timestamps: true }
);
mongoose.plugin(slug);
Server.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: 'all'
});
module.exports = mongoose.model('Server', Server, 'Server');
