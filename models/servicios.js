const {Schema, model} = require('mongoose')
const servicioSchema = Schema({
    "Id": {
        type: Number
    },
    "Nombre": {
        type: String
    },
    "Descripcion": {
        type: String
    },
    "Tiempo": {
        type: String
    },
    "Estado": {
        type: String
    }

})

module.exports = model("servicio", servicioSchema)


