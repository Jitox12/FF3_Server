const express = require('express')
const router = express.Router()
const {validatorLogin, validatorRegister}= require('../../middlewares/validators/user/auth')
const {validatorFindUsers}= require('../../middlewares/validators/user/findUser')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const loginServices = require('../../services/user/loginServices')
const registerServices = require('../../services/user/registerServices')
const findUserServices = require ('../../services/user/findUserServices')

router.post('/register', [validatorRegister], registerServices )
router.post('/login',[validatorLogin], loginServices)

router.get('/find-user',[validatorFindUsers,authMiddleware,checkRole(['admin'])], findUserServices)

module.exports = router