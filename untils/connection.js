const mongoose = require('mongoose');
const connect = async () => {
    const uri = process.env.DB_URL || "mongodb+srv://nvthanh118:vanthanh118@cluster0.xvqzvwo.mongodb.net/manage_student_app";
    await mongoose.set('bufferCommands', false);
    try {
        await mongoose.connect(uri, { useNewUrlParser: true })
            .then(() => console.log('Connected to database successfully'))
            .catch((err) => console.error(err))
    } catch (error) {
        handleError(error);
    }

}
module.exports = { connect };