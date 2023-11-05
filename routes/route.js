const express = require('express');
const router = express.Router();
const uploads = require('../untils/uploadImage.js')
const SiteController = require('../controllers/SiteController.js');
const AddController = require('../controllers/AddController.js');
const EditController = require('../controllers/EditController.js');
const DeleteController = require('../controllers/DeleteController.js');
const UpdateController = require('../controllers/UpdateController.js');

router.get('/', SiteController);
router.post('/add',uploads, AddController)
router.get('/edit/:_id', EditController);
router.put('/update/:_id',uploads, UpdateController);
router.delete('/delete/:_id', DeleteController);
module.exports = router;