const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createElementServices} = require('../../services/element/createElementServices')
const{findElementServices} = require('../../services/element/findElementServices')
const{editElementServices} = require('../../services/element/editElementServices')

const {validatorCreateElement} = require('../../middlewares/validators/element/validatorCreateElement')
const {validatorFindElements} = require('../../middlewares/validators/element/validatorFindElements')
const {validatorEditElement} = require('../../middlewares/validators/element/validatorEditElement')

route.post('/create-element',[authMiddleware,checkRole(['admin']), validatorCreateElement], createElementServices)
route.get('/find-element',[authMiddleware,checkRole(['user','admin']),validatorFindElements], findElementServices)
route.put('/edit-element/:id',[authMiddleware,checkRole(['admin']),validatorEditElement], editElementServices)


module.exports = route