const express = require('express')
const router = express.Router()
require('dotenv').config({path:'./src/config/.env'})

const API_VERSION = process.env.API_VERSION

const userRoutes = require('./user')
const elementRoutes = require('./element')
const magicTypeRoutes = require('./magicType')
const abilityRoutes = require('./ability')
const passiveAbilityRoutes = require('./passiveAbility')

router.use(`/api/${API_VERSION}`, userRoutes)
router.use(`/api/${API_VERSION}`, elementRoutes)
router.use(`/api/${API_VERSION}`, magicTypeRoutes)
router.use(`/api/${API_VERSION}`, abilityRoutes)
router.use(`/api/${API_VERSION}`, passiveAbilityRoutes)

module.exports = router