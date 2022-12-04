const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorFindWeapon = [
    check('limit')
    .default(5)
    .isNumeric(),
    check('page')
    .default(1)
    .isNumeric(),
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorFindWeapon
}