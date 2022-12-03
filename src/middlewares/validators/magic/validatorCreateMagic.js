const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateMagic = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('damage')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('magicType')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('element')
    .exists()
    .notEmpty()
    .isMongoId(),

    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateMagic,
}