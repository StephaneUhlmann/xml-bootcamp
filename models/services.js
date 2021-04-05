var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({ 
    barbername: String,
    service: String,
    price: Number 
});

module.exports = mongoose.model('Service', serviceSchema);