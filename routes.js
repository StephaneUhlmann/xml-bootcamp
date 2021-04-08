const express = require('express'),
router = express.Router();

var serviceCtrl = require('./services-controller');

router.post('/services', serviceCtrl.createService);
router.get('/services', serviceCtrl.getServices);
router.get('/services/:id', serviceCtrl.getService);
router.put('/services/:id', serviceCtrl.updateService);
router.delete('/services/:id', serviceCtrl.deleteService);

module.exports = router;