const express = require('express')
const route = express.Router()

const {createArmorServices} = require('../../services/armor/createArmorServices')
const {findArmorServices} = require('../../services/armor/findArmorServices')
const {editArmorServices} = require('../../services/armor/editArmorServices')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {validatorCreateArmor} = require('../../middlewares/validators/armor/validatorCreateArmor')
const {validatorFindArmor} = require('../../middlewares/validators/armor/validatorFindArmor')
const {validatorEditArmor} = require('../../middlewares/validators/armor/validatorEditArmor')

route.post('/create-armor',[validatorCreateArmor],createArmorServices)
route.get('/find-armor',[validatorFindArmor], findArmorServices)
route.put('/edit-armor/:id',[validatorEditArmor], editArmorServices)

module.exports = route