const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreatePassiveAbility = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('element')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('damage')
    .exists()
    .notEmpty()
    .isNumeric()
    .default(0),
    check('defense')
    .exists()
    .notEmpty()
    .isNumeric()
    .default(0),    
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreatePassiveAbility,
}