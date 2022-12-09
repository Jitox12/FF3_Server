const MagicType = require('../../entities/magicType')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function editMagicTypeServices(req,res){
    
    try{
    
    req = matchedData(req)
    const{name,id} = req
    
    const magicType = {
        name: await toUpperCaseFirstKey(name)
    }
    
    const duplicated = await handleDuplicatedError('name',magicType.name,MagicType)
    const internalDuplicate = await handleEditDuplicatedError(magicType.name,MagicType,id)

    if(duplicated){
       if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }
    
    MagicType.findByIdAndUpdate(id,magicType)
    res.json({message:`EDIT MAGIC TYPE NAME = '${magicType.name}'`})   
    }catch(err){
        handleHttpError(res,'ERROR_EDITED_MAGIC_TYPE', 409)
    }  
}

module.exports = {
    editMagicTypeServices
}