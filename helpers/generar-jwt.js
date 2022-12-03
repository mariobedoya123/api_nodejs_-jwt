//instalar paquete json web tokens alv
const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const paylaod = {uid}
        jwt.sign(paylaod, process.env.clave,{
            expiresIn : '1h',
        }, (err, token) => {
            if(err){
                reject('error  al generar el token')
            }
            else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}
