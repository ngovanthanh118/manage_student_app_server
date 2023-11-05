const Student = require('../models/student.js');

async function EditController(req, res) {
    try{
        const id = req.params._id;
        const findStudent = await Student.findById(id);
        res.status(200).send(findStudent);
    }
    catch(error) {
        res.status(400).send({success: false, msg: error.message});
    }
}

module.exports = EditController;