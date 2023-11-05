const mongoose = require('mongoose');
const { Schema } = mongoose;
const studentSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    birthday: {
        type: Date,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
})

module.exports = mongoose.model("Student", studentSchema);
