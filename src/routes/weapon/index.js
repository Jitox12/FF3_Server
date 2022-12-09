const express = require('express')
const route = express.Router()

const {createWeaponServices} = require('../../services/weapon/createWeaponServices')
const {findWeaponServices} = require('../../services/weapon/findWeaponServices')
const {editWeaponServices} = require('../../services/weapon/editWeaponServices')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {validatorCreateWeapon} = require('../../middlewares/validators/weapon/validatorCreateWeapon')
const {validatorFindWeapon} = require('../../middlewares/validators/weapon/validatorFindWeapon')
const {validatorEditWeapon} = require('../../middlewares/validators/weapon/validatorEditWeapon')

route.post('/create-weapon',[validatorCreateWeapon],createWeaponServices)
route.get('/find-weapon',[validatorFindWeapon], findWeaponServices)
route.put('/edit-weapon/:id',[validatorEditWeapon], editWeaponServices)

module.exports = route