const Student = require('../models/student.js');
async function AddController(req, res) {
    try{
        const student = new Student({
            name: req.body.name,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            image: req.file.filename,
        })
        const postStudent = await student.save();
        res.status(200).send(postStudent);
    }
    catch(error) {
        res.status(400).send({success: false, msg: error.message});
    }

}

 module.exports = AddController;