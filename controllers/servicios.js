const Servicio = require('../models/servicios')

const getServicio = async (req, res) =>{
    const Servicio1 = await Servicio.find()
    
    res.json({
        msg: 'Servicio GET API',
        Servicio1
    })
}

const postServicio = (req, res) =>{
    const {Id, Nombre, Descripcion, Tiempo, Estado} = req.body

    const Servicio1 = new Servicio ({Id, Nombre, Descripcion, Tiempo, Estado})
    Servicio1.save()

    res.json({
        msg:'Servicio POST API',
        Servicio1
    })
}

const putServicio = async(req, res) =>{
    const {Id, Nombre, Descripcion, Tiempo, Estado} = req.body
    const Servicio1 = await Servicio.findOneAndUpdate({Id:Id}, {Nombre : Nombre, Descripcion : Descripcion, Tiempo : Tiempo, Estado: Estado})

    res.json({
        msg:'Servicio PUT API',
        Servicio1
    })
}

const patchServicio = async(req, res) =>{
    const {Id, Nombre, Descripcion, Tiempo, Estado} = req.body
    const Servicio1 = await Servicio.findOneAndUpdate({Id:Id}, {Nombre : Nombre, Descripcion : Descripcion, Tiempo : Tiempo, Estado: Estado})

    res.json({
        msg:'Servicio PATCH API',
        Servicio1
    })
}

const deleteServicio = async(req, res) =>{
    const{Nombre} = req.query
   const nombre1 = await Servicio.findOneAndDelete ({ Nombre : Nombre })

    res.json({
        msg:'Servicio DELETE API'
    })
}



module.exports = {
    getServicio,
    postServicio,
    putServicio,
    patchServicio,
    deleteServicio
}
