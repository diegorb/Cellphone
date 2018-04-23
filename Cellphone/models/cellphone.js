'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CellphoneSchema = Schema({
	model: String,
	brand: String,
	price: String,
	release: Number
});

module.exports = mongoose.model('Cellphone',CellphoneSchema);