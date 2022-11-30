const express = require('express')
const router = express.Router()
const {validatorLogin, validatorRegister, validatorGetUser}= require('../../middlewares/validators/user/auth')
const {authMongoValidator} = require('../../middlewares/validators/user/authMongo')
const {authMiddleware} = require('../../middlewares/session')
const {login} = require('../../controllers/user/loginController')
const {register} = require('../../controllers/user/registerController')
const {findUser} = require ('../../controllers/user/findUserController')
const {checkRole} = require('../../middlewares/role')

router.post('/register', [validatorRegister,authMongoValidator], register )
router.post('/login',[validatorLogin], login)

router.get('/find-user',[validatorGetUser,authMiddleware,checkRole(['admin'])], findUser)

module.exports = router