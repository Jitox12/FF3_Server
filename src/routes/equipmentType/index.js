const express = require('express')
const route = express.Router()

const {createEquipmentTypeServices} = require('../../services/equipmentType/createEquipmentTypeServices')
const {findEquipmentTypeServices} = require('../../services/equipmentType/findEquipmentTypeServices')

// const {authMiddleware} = require('../../middlewares/session')
// const {checkRole} = require('../../middlewares/role')

const {validatorCreateEquipmentType} = require('../../middlewares/validators/equipmentType/validatorCreateEquipmentType')
const {validatorFindEquipmentType} = require('../../middlewares/validators/equipmentType/validatorFindEquipmentType')

route.post('/create-equipmenttype',[validatorCreateEquipmentType],createEquipmentTypeServices)
route.get('/find-equipmenttype',[validatorFindEquipmentType], findEquipmentTypeServices)

module.exports = route