const { response } = require('express')
const { generarJWT } = require('../helpers/generar-jwt')
const servicio = require('../models/servicios')
const login = async (req, res) => {
    const {Id, Nombre} = req.body
try{
    const servicios = await servicio.findOne({Nombre})
    if ( !servicios ){
        return res.status(400).json({
            msg: 'Servicio / nombre no encontrado'
        })
    }
    if(servicios.Id != Id){
        return res.status(400).json({
            msg: 'Servicio / Id incorrecto'
        })    
    }
    const token = await generarJWT(servicios.Id)
    res.json({
        servicios,
        token
    })
}catch(err){
    console.log('Contacte el administrador del sistema')
}
}

module.exports = {
    login
}