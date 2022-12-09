const express = require('express')
const route = express.Router()

const {createEquipmentTypeServices} = require('../../services/equipmentType/createEquipmentTypeServices')
const {findEquipmentTypeServices} = require('../../services/equipmentType/findEquipmentTypeServices')
const {editEquipmentTypeServices} = require('../../services/equipmentType/editEquipmentTypeServices')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {validatorCreateEquipmentType} = require('../../middlewares/validators/equipmentType/validatorCreateEquipmentType')
const {validatorFindEquipmentType} = require('../../middlewares/validators/equipmentType/validatorFindEquipmentType')
const {validatorEditEquipmentType} = require('../../middlewares/validators/equipmentType/validatorEditEquipmetType')

route.post('/create-equipmenttype',[validatorCreateEquipmentType],createEquipmentTypeServices)
route.get('/find-equipmenttype',[validatorFindEquipmentType], findEquipmentTypeServices)
route.put('/edit-equipmenttype/:id',[validatorEditEquipmentType], editEquipmentTypeServices)

module.exports = route