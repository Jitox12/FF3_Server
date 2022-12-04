const express = require('express')
const router = express.Router()
require('dotenv').config({path:'./src/config/.env'})

const API_VERSION = process.env.API_VERSION

const userRoutes = require('./user')
const elementRoutes = require('./element')
const magicTypeRoutes = require('./magicType')
const abilityRoutes = require('./ability')
const passiveAbilityRoutes = require('./passiveAbility')
const magicRoutes = require('./magic')
const equipmentTypeRoutes = require('./equipmentType')
const armorRoutes = require('./armor')
const weaponRoutes = require('./weapon')
const characterRoutes = require('./character')
const jobRoutes = require('./job')
const crystalRoutes = require('./crystal')

router.use(`/api/${API_VERSION}`, userRoutes)
router.use(`/api/${API_VERSION}`, elementRoutes)
router.use(`/api/${API_VERSION}`, magicTypeRoutes)
router.use(`/api/${API_VERSION}`, abilityRoutes)
router.use(`/api/${API_VERSION}`, passiveAbilityRoutes)
router.use(`/api/${API_VERSION}`, magicRoutes)
router.use(`/api/${API_VERSION}`, equipmentTypeRoutes)
router.use(`/api/${API_VERSION}`, armorRoutes)
router.use(`/api/${API_VERSION}`, weaponRoutes)
router.use(`/api/${API_VERSION}`, characterRoutes)
router.use(`/api/${API_VERSION}`, jobRoutes)
router.use(`/api/${API_VERSION}`, crystalRoutes)

module.exports = router