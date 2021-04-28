const express = require('express'),
router = express.Router();

var serviceCtrl = require('./services-controller');

router.post('/services', serviceCtrl.createService);
router.get('/services', serviceCtrl.getServices);
router.get('/services/:id', serviceCtrl.getService);
router.put('/services/:id', serviceCtrl.updateService);
router.delete('/services/:id', serviceCtrl.deleteService);

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;