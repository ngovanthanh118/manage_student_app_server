const Student = require('../models/student.js')
async function SiteController(req, res) {
    try {
        const students = await Student.find({});
        res.status(200).send(students);
    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}
module.exports = SiteController;