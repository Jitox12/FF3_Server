const express = require('express')
const route = express.Router()

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')
const uploadMiddleware = require('../../middlewares/multer')
const imageMiddleware = require('../../middlewares/validators/imageMiddleware')

const {createCharacter_JobServices} = require('../../services/character_job/createCharacter_JobServices')

const {validatorCreateCharacter_Job} = require('../../middlewares/validators/character_job/validatorCreateCharacter_Job')


route.post('/create-character_job',[uploadMiddleware.single('file'),imageMiddleware,validatorCreateCharacter_Job], createCharacter_JobServices)


module.exports = route