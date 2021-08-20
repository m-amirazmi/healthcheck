const router = require('express').Router()
const { create, findAll, findOne, update, remove } = require('../controllers/symptom.controller')

router.get('', findAll)
router.post('', create)
router.get('/:symptomId', findOne)
router.put('/:symptomId', update)
router.delete('/:symptomId', remove)

module.exports = router