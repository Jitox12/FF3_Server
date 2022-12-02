const {matchedData} = require('express-validator')
const {tokenSign} = require('../../utils/handleJwt')
const {handleHttpError} = require('../../utils/handleError')
const {encrypt} = require('../../utils/handlePassword')
const User = require('../../entities/user')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')

const register = async (req,res) => {
    const user = new User()
    
    try{
    req = matchedData(req)
    
    const {name,email,password} = req
    const passwordHash = await encrypt(password)
    user.name = name
    user.email = email
    user.password = passwordHash

    const duplicate = await handleDuplicatedError('email',email,User)
    console.log(duplicate)
    if(duplicate){
      handleHttpError(res,'EMAIL_DUPLICATED', 409)
      return
    }

    const dataUser = await user.save()
    dataUser.set('password', undefined, {strict:false})
    res.json('USER_REGISTER').status(200)
    
    }catch(err){
        console.log(err)
        handleHttpError(res,'ERROR_REGISTER_USER')
    }
}
module.exports = register