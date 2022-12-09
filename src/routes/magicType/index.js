const express = require('express')
const route = express.Router()

const {createMagicTypeServices} = require('../../services/magicType/createMagicTypeServices')
const {findMagicTypeServices} = require('../../services/magicType/findMagicTypeServices')
const {editMagicTypeServices} = require('../../services/magicType/editMagicType')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {validatorCreateMagicType} = require('../../middlewares/validators/magicType/validatorCreateMagicType')
const {validatorFindMagicType} = require('../../middlewares/validators/magicType/validatorFindMagicType')
const {validatorEditMagicType} = require('../../middlewares/validators/magicType/validatorEditMagicType')

route.post('/create-magictype',[authMiddleware,checkRole(['admin']),validatorCreateMagicType],createMagicTypeServices)
route.get('/find-magictype',[authMiddleware,checkRole(['user','admin']),validatorFindMagicType], findMagicTypeServices)
route.put('/edit-magictype/:id',[authMiddleware,checkRole(['admin']),validatorEditMagicType], editMagicTypeServices)

module.exports = route