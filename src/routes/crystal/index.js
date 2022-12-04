const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createCrystalServices} = require('../../services/crystal/createCrystalServices')
const{findCrystalServices} = require('../../services/crystal/findCrystalServices')

const {validatorCreateCrystal} = require('../../middlewares/validators/crystal/validatorCreateCrystal')
const {validatorFindCrystal} = require('../../middlewares/validators/crystal/validatorFindCrystal')

route.post('/create-crystal',[validatorCreateCrystal], createCrystalServices)
route.get('/find-crystal',[validatorFindCrystal], findCrystalServices)

module.exports = route