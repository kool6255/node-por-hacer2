const description = {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
};
const completado= {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
};
const argv = require('yargs')
.command('crear', 'Crear un elemento por hacer', {
    description
})
.command('actualizar', 'Actualizar el estado completado de una tarea', {
    description,
    completado  
})
.command('borrar', 'Borra una tarea', {
    description
})
.help().argv


module.exports = {
    argv
}

