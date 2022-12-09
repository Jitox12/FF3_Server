const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createPassiveAbilityServices} = require('../../services/passiveAbility/createPassiveAbilityServices')
const {findPassiveAbilityServices} = require('../../services/passiveAbility/findPassiveAbilityServices')
const {editPassiveAbilityServices} = require('../../services/passiveAbility/editPassiveAbility')

const {validatorCreatePassiveAbility} = require('../../middlewares/validators/passiveAbility/validatorCreatePassiveAbility')
const {validatorFindPassiveAbility} = require('../../middlewares/validators/passiveAbility/validatorFindPassiveAbility')
const {validatorEditPassiveAbility} = require('../../middlewares/validators/passiveAbility/validatorEditPassiveAbility')

route.post('/create-passiveability',validatorCreatePassiveAbility, createPassiveAbilityServices)
route.get('/find-passiveability',validatorFindPassiveAbility, findPassiveAbilityServices)
route.put('/edit-passiveability/:id',validatorEditPassiveAbility, editPassiveAbilityServices)
 
module.exports = route