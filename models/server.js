const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')//vincular la conexión 

class Server {

    constructor() {

        this.app = express()
        this.port = process.env.port
        this.servicioPath = '/api/servicios'
        this.authPath = '/api/auth'
// Metodo para la conexion
        this.middlewares()
// incluir funcionalidades a ala palicacion 
        this.conectarDB()
// incluir las rutas 
        this.routes()
    }

    async conectarDB() {  
        await dbConnection()
    }

    middlewares() { 
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json()) 

    }

    routes() { //rutas de la aplicación
        this.app.use(this.servicioPath, require('../routes/servicios'));

        this.app.use(this.authPath, require('../routes/auth'));
    }

    listen() { //Es para escucahr el puerto 
        this.app.listen(this.port, (req, res) => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
}

module.exports = Server