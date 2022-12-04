const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateCrystal = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('job')
    .exists()
    .notEmpty()
    .isMongoId(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateCrystal,
}