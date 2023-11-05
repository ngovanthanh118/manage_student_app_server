const Student = require('../models/student.js');
const path = require('path');
const fs = require('fs');
async function DeleteController(req, res) {
    try {
        const id = req.params._id;
        const studentDelete = await Student.findByIdAndDelete(id);
        if (studentDelete.image) {
            fs.unlinkSync(path.join(__dirname, '../public/uploads/' + studentDelete.image));
        }
        res.status(200).send({ success: true });
    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }
}

module.exports = DeleteController;