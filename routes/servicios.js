const { Router } = require('express')
const router = Router() 

const{getServicio, postServicio, deleteServicio, putServicio, patchServicio } = require('../controllers/servicios')


router.get('/',getServicio)
router.post('/',postServicio)
router.put('/',putServicio)
router.patch('/',patchServicio)
router.delete('/',deleteServicio)



module.exports = router