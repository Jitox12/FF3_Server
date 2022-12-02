const express = require('express')
const router = express.Router()
require('dotenv').config({path:'./src/config/.env'})

const API_VERSION = process.env.API_VERSION

const userRoutes = require('./user')
const elementRoutes = require('./element')

router.use(`/api/${API_VERSION}`, userRoutes)
router.use(`/api/${API_VERSION}`, elementRoutes)

module.exports = router