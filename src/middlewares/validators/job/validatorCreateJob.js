const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateJob = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('character')
    .exists()
    .notEmpty()
    .isMongoId(),
    check('crystal')
    .exists()
    .notEmpty()
    .isMongoId(),
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

    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateJob,
}