const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createPassiveAbilityServices} = require('../../services/passiveAbility/createPassiveAbilityServices')
const {findPassiveAbilityServices} = require('../../services/passiveAbility/findPassiveAbilityServices')

const {validatorCreatePassiveAbility} = require('../../middlewares/validators/passiveAbility/validatorCreatePassiveAbility')
const {validatorFindPassiveAbility} = require('../../middlewares/validators/passiveAbility/validatorFindPassiveAbility')

route.post('/create-passiveability',validatorCreatePassiveAbility, createPassiveAbilityServices)
route.get('/find-passiveability',validatorFindPassiveAbility, findPassiveAbilityServices)
 
module.exports = route