var express = require('express');
var mongoose = require('mongoose');
var app = require('../app');
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/cellphone',(err,res) =>{
	if(err){
		throw err;
	}else{
		console.log("Successful Connection to Database");
		app.listen(port,function(){
			console.log("http://localhost: "+ port);
		});
	}
});

