const Student = require('../models/student.js');
const fs = require('fs');
const path = require('path');
async function UpdateController(req, res) {
    try {
        const id = req.params._id;
        const name = req.body.name;
        const birthday = req.body.birthday;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;
        if (req.file) {
            const image = req.file.filename;
            const findStudent = await Student.findById(id);
            fs.unlinkSync(path.join(__dirname, '../public/uploads/' + findStudent.image));
            const updateStudent = await Student.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    birthday: birthday,
                    email: email,
                    phone: phone,
                    address: address,
                    image: image,
                }
            });
            res.status(200).send(updateStudent);
        }
        else {
            const updateStudent = await Student.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    birthday: birthday,
                    email: email,
                    phone: phone,
                    address: address,
                }
            });
            res.status(200).send(updateStudent);
        }

    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}

module.exports = UpdateController;