const router = require('express').Router()
const { create, findAll, findOne, update, remove } = require('../controllers/service.controller')

router.get('', findAll)
router.post('', create)
router.get('/:serviceId', findOne)
router.put('/:serviceId', update)
router.delete('/:serviceId', remove)

module.exports = router