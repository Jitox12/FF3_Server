const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorEditUser = [
    check('name')
    .exists()
    .notEmpty()
    .isLength({min:3, max:19}),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    check('id')
    .exists()
    .notEmpty()
    .isMongoId(), 
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorEditUser
}