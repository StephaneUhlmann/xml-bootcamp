const express = require('express'),
router = express.Router();

var userCtrl = require('./user-controller'),
serviceCtrl = require('./services-controller');

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

router.post('/services', serviceCtrl.createService);
router.get('/services', serviceCtrl.getServices);
router.get('/services/:id', serviceCtrl.getService);
router.put('/services/:id', serviceCtrl.updateService);
router.delete('/services/:id', serviceCtrl.deleteService);

module.exports = router;