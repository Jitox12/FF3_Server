const MagicType = require('../../entities/magicType')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function createMagicTypeServices(req,res){

    req = matchedData(req)
    const{name} = req
    const magicType = new MagicType()

    try{
    magicType.name = await toUpperCaseFirstKey(name)
    const duplicated = await handleDuplicatedError('name',magicType.name,MagicType)
    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
    magicType.save()
    res.json({message:`CREATED MAGIC TYPE NAME = '${magicType.name}'`})   
    }catch(err){
        console.log(err)
        handleHttpError(res)
    }  
}

module.exports = {
    createMagicTypeServices
}