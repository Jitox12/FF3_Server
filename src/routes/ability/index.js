const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createAbilityServices} = require('../../services/ability/createAbilityServices')
const {findAbilityServices} = require('../../services/ability/findAbilityServices')

const {validatorCreateAbility} = require('../../middlewares/validators/ability/validatorCreateAbility')
const {validatorFindAbility} = require('../../middlewares/validators/ability/validatorFindAbility')

route.post('/create-ability',[authMiddleware,checkRole(['admin']), validatorCreateAbility], createAbilityServices)
route.get('/find-ability',[authMiddleware,checkRole(['admin','user']),validatorFindAbility], findAbilityServices)
 
module.exports = route