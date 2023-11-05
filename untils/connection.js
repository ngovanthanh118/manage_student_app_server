const mongoose = require('mongoose');
const Student = require('../models/student.js');
const connect = async () => {
    const uri = process.env.DB_URL;
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Connected to database successfully!'))
            .catch((err) => console.error(err));
        await Student;
    } catch (error) {
        handleError(error);
    }

}
module.exports = { connect };