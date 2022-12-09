const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorEditMagic = [
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
    check('id')
    .exists()
    .notEmpty()
    .isMongoId(),

    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorEditMagic,
}