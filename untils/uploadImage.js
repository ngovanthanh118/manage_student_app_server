const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads'), function (err, succ) {
            if (err) {
                console.log(err);
            }
        });
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + "_" + file.originalname;
        cb(null, fileName, function (err, succ) {
            if (err) {
                console.log(err);
            }
        });
    }
});

const uploads = multer({ storage: storage, }).single('image');

module.exports = uploads;