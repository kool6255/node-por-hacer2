const fs = require('fs');

let listadoPorHacer = [];
const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }catch{
        listadoPorHacer = [];
    }
    
}
const crear = (description) =>{
    cargarDB();
    let porHacer = {
        description,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (description, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.description === description;
    });
    if( index >= 0){
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true
    }else return false;
}

const borrar = (description) => {
    cargarDB();
    let listadoPorHacerNew = listadoPorHacer.filter( tarea => {
        return tarea.description !== description;
    });

    if( listadoPorHacerNew.length === listadoPorHacer.length){
        return false
    }else {
        listadoPorHacer = listadoPorHacerNew;
        guardaDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}