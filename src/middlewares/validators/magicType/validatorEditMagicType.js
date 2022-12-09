const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorEditMagicType = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('id')
    .exists()
    .notEmpty()
    .isMongoId(),

    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorEditMagicType,
}