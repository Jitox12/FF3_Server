const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateJob = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('ability')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('equipmentType')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('magic')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('detail')
    .exists()
    .notEmpty()
    .isString(),

    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateJob,
}