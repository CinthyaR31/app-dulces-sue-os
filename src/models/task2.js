const mongoose = require('mongoose');
const { Schema } = mongoose;

// Este esquema es para decirle a mongodb como van a lucir los datos
const task2 = new Schema({
    title: String,
    description: String
})

module.exports = mongoose.model('task2',task2);
