const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {createCharacterServices} = require('../../services/character/createCharacterServices')
const{findCharacterServices} = require('../../services/character/findCharacterServices')
const{editCharacterServices} = require('../../services/character/editCharacterServices')

const {validatorCreateCharacter} = require('../../middlewares/validators/character/validatorCreateCharacter')
const {validatorFindCharacter} = require('../../middlewares/validators/character/validatorFindCharacter')
const {validatorEditCharacter} = require('../../middlewares/validators/character/validatorEditCharacter')

route.post('/create-character',[validatorCreateCharacter], createCharacterServices)
route.get('/find-character',[validatorFindCharacter], findCharacterServices)
route.put('/edit-character/:id',[validatorEditCharacter], editCharacterServices)


module.exports = route