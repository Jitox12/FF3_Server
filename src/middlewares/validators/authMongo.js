const User = require('../../entities/user')
const Element = require('../../entities/element') 

const{handleHttpError} = require('../../utils/handleError')

const authMongoValidator = async (req,res, next) => {
    const {email} = req.body
    const emailCount = await User.exists({email:email})
    
    if(emailCount){
        handleHttpError(res,'DUPLICATE EMAIL', 409)
    }else{
        next()
    }
}
const nameMongoValidator = async(req,res,next) => {
    const {name} = req.body
    const nameCount = await Element.exists({name:name})
    
    if(nameCount){
        handleHttpError(res,'DUPLICATE NAME', 409)
    }else{
        next()
    }
}

module.exports = {
    authMongoValidator,
    nameMongoValidator
}