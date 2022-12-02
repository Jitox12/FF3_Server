const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createElementServices} = require('../../services/element/createElementServices')
const{findElementServices} = require('../../services/element/findElementServices')

const {validatorCreateElement} = require('../../middlewares/validators/element/createElement')
const {validatorFindElements} = require('../../middlewares/validators/element/findElements')

route.post('/create-element',[authMiddleware,checkRole(['admin']), validatorCreateElement], createElementServices)
route.get('/find-element',[authMiddleware,checkRole(['admin']),validatorFindElements], findElementServices)

module.exports = route