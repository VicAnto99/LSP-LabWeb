const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    last_name: String,
    mom_last_name: String,
    edad: String,
    numero_telefonico: String
},{
    timestamps: true
}
);

module.exports = model('user', userSchema);