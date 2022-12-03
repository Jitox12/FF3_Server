const express = require('express')
const route = express.Router()

const {createMagicServices} = require('../../services/magic/createMagicServices')
const {findMagicServices} = require('../../services/magic/findMagicServices')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {validatorCreateMagic} = require('../../middlewares/validators/magic/validatorCreateMagic')
const {validatorFindMagic} = require('../../middlewares/validators/magic/validatorFindMagic')

route.post('/create-magic',[validatorCreateMagic],createMagicServices)
route.get('/find-magic',[validatorFindMagic], findMagicServices)

module.exports = route