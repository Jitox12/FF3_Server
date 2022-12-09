const express = require('express')
const route = express.Router()

const {createJobServices} = require('../../services/job/createJobServices')
const {findJobServices} = require('../../services/job/findJobServices')
const {editJobServices} = require('../../services/job/editJobServices')

const {authMiddleware} = require('../../middlewares/session')
const {checkRole} = require('../../middlewares/role')

const {validatorCreateJob} = require('../../middlewares/validators/job/validatorCreateJob')
const {validatorFindJob} = require('../../middlewares/validators/job/validatorFindJob')
const {validatorEditJob} = require('../../middlewares/validators/job/validatorEditJob')

route.post('/create-job',[validatorCreateJob],createJobServices)
route.get('/find-job',[validatorFindJob], findJobServices)
route.put('/edit-job/:id',[validatorEditJob], editJobServices)

module.exports = route