const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorEditArmor = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('defense')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('passiveAbility')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('equipmentType')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorEditArmor,
}