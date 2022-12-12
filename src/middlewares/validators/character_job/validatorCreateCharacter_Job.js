const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateCharacter_Job = [
    check('job')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('character')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('path')
    .exists()
    .notEmpty()
    .isString(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateCharacter_Job,
}