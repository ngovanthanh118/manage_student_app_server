const mongoose = require('mongoose');
const connect = async () => {
    const uri = process.env.DB_URL;
    try {
        await mongoose.connect(uri)
            .then(() => console.log('Connected to database successfully'))
            .catch((err) => console.error(err))
    } catch (error) {
        handleError(error);
    }

}
module.exports = { connect };