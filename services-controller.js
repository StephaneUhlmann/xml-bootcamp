var Service = require('./models/services')

exports.createService = function(req, res) { 
    res.json(req.body);
    var newservice = new Service(req.body);
    newservice.save(function (err, service) { 
        if (err) { 
            res.status (400).json(err);
        };
        res.json(service); 
});
};

exports.getServices = function(req, res) {
  Service.find({}, function (err, services) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(services);
  }); 
};

exports.getService = function(req, res) {
  Service.findOne({_id: req.params.id}, function (err, services) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(services);
  }); 
};

exports.updateService = function(req, res) {
  Service.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, services) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(services);
  }); 
};

exports.deleteService = function(req, res) {
  Service.findByIdAndRemove({_id: req.params.id}, function (err, services) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(services);
  }); 
};