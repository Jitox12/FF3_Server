const {validationResult} = require('express-validator')
const {handleHttpError} = require('../utils/handleError')
const {handleDeleteImage} = require('../utils/handleImagePath')

const validateResults = (req,res,next) => {
    try{
        validationResult(req).throw()
        return next()
    }catch(err){
        handleDeleteImage(req.body.path)
        handleHttpError(res,'DATE_ERROR',400)
    }
}

module.exports = validateResults