'use strict'

var Cellphone = require('../models/cellphone');

function getCellphone(req,res){
    var cellphoneId = req.params.id;
    Cellphone.findById(cellphoneId,(err,cellphone)=>{
        if(err){
            res.status(500).send({message:'Error en la peticion'});
        }else{
            if(!cellphone){
                res.status(404).send({message:'El celular no existe'});
            }else{
                res.status(200).send({cellphone});
            }
        }
    });
}

function findCellphone(req,res){
    var cellphoneId = req.params.id;
    Cellphone.findById(cellphoneId,(err,cellphone)=>{
        if(err){
            res.status(500);
        }else{
            if(!cellphone){
                res.status(404);
            }else{
                res.status(200);
            }
        }
    });
}

function getCellphones(req,res){
    Cellphone.find().sort('model').exec(function(err,cellphones){
        if(err){
            res.status(500).send({message:'Error en la peticion'});
        }else{
            if(!cellphones){
                res.status(404).send({message:'No hay celulares'});
            }else{
                return res.status(200).send({
                    cellphones: cellphones
                });
            }
        }
    });
}

function SaveCellphone(req,res){
    var cellphone = new Cellphone();
    var params = req.body;
    cellphone.model = params.model;
    cellphone.brand = params.brand;
    cellphone.price = params.price;
    cellphone.release = params.release;

    if(cellphone.model != null && cellphone.brand != null && cellphone.price != null && cellphone.release != null){
        cellphone.save((err,cellphoneStored) =>{
            if(err){
                res.status(500).send({message:'Error al guardar el celular'}); 
            }else{
                if(!cellphoneStored){
                    res.status(404).send({message:'No se ha registrado el celular'}); 
                }else{
                    res.status(200).send({cellphone:cellphoneStored}); 
                }
            }	
        });
    }else{
        res.status(200).send({message:'Rellena todos los campos'}); 
    }
}

function updateCellphone(req,res){
    var cellphoneId = req.params.id;
    var update = req.body;

    Cellphone.findByIdAndUpdate(cellphoneId,update,(err,cellphoneUpdate) =>{
        if(err){
            res.status(500).send({message:'Error al actualizar el celular'});
        }else{
            if(!cellphoneUpdate){
                res.status(404).send({message:'El celular no ha sido actualizado'});
            }else{
                res.status(200).send({cellphone:cellphoneUpdate});
            }
        }
    });
}

function deleteCellphone(req,res){
    var cellphoneId = req.params.id;

    Cellphone.findByIdAndRemove(cellphoneId,(err,cellphoneRemoved) => {
        if(err){
            res.status(500).send({message:'Error al borrar el celular'});
        }else{
            if(!cellphoneRemoved){
                res.status(404).send({message:'El celular no ha sido eliminado'});
            }else{
                res.status(200).send({cellphone:cellphoneRemoved});
            }
        }
    });
}

module.exports = {
    getCellphone,
    getCellphones,
    SaveCellphone,
    updateCellphone,
    deleteCellphone,
    findCellphone
};