const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorEditPassiveAbility = [
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
    check('element')
    .exists()
    .notEmpty()
    .isMongoId(),    
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorEditPassiveAbility,
}