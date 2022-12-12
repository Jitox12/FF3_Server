const {check} = require('express-validator')
const validateResults = require('../../../utils/handleValidator')

const validatorCreateEquipmentType = [
    check('name')
    .exists()
    .notEmpty()
    .isString(),
    check('path')
    .exists()
    .notEmpty()
    .isString(),
  
    (req,res,next)=>{
        validateResults(req,res,next)
    }
]

module.exports = {
    validatorCreateEquipmentType,
}