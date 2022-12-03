const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateMagicType = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateMagicType,
}