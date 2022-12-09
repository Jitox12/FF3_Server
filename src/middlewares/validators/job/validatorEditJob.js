const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorEditJob = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('ability')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('equipmentType')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('detail')
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
    validatorEditJob,
}