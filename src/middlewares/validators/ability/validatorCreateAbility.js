const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateAbility = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('damage')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('element')
    .exists()
    .notEmpty()
    .isMongoId(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateAbility,
}