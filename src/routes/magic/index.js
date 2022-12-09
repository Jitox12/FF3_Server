const express = require('express')
const route = express.Router()

const {createMagicServices} = require('../../services/magic/createMagicServices')
const {findMagicServices} = require('../../services/magic/findMagicServices')
const {editMagicServices} = require('../../services/magic/editMagicServices')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {validatorCreateMagic} = require('../../middlewares/validators/magic/validatorCreateMagic')
const {validatorFindMagic} = require('../../middlewares/validators/magic/validatorFindMagic')
const {validatorEditMagic} = require('../../middlewares/validators/magic/validatorEditMagic')

route.post('/create-magic',[validatorCreateMagic],createMagicServices)
route.get('/find-magic',[validatorFindMagic], findMagicServices)
route.put('/edit-magic/:id',[validatorEditMagic], editMagicServices)

module.exports = route