const mongoose = require('mongoose');
const connect = async () => {
    const uri = "mongodb+srv://nvthanh118:vanthanh118@cluster0.xvqzvwo.mongodb.net/manage_student_app" || process.env.DB_URL ;
    try {
        await mongoose.connect(uri, { useNewUrlParser: true })
            .then(() => console.log('Connected to database successfully'))
            .catch((err) => console.error(err))
    } catch (error) {
        handleError(error);
    }
}
module.exports = { connect };