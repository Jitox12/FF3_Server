const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createCrystalServices} = require('../../services/crystal/createCrystalServices')
const{findCrystalServices} = require('../../services/crystal/findCrystalServices')
const{editCrystalServices} = require('../../services/crystal/editCrystalServices')

const {validatorCreateCrystal} = require('../../middlewares/validators/crystal/validatorCreateCrystal')
const {validatorFindCrystal} = require('../../middlewares/validators/crystal/validatorFindCrystal')
const {validatorEditCrystal} = require('../../middlewares/validators/crystal/validatorEditCrystal')

route.post('/create-crystal',[validatorCreateCrystal], createCrystalServices)
route.get('/find-crystal',[validatorFindCrystal], findCrystalServices)
route.put('/edit-crystal/:id',[validatorEditCrystal], editCrystalServices)

module.exports = route