const Character = require('../../entities/character')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')

async function editCharacterServices(req,res){
  
    try{
    req = matchedData(req)
    const {name, job,id} = req
   
    const character = {
        name: await toUpperCaseFirstKey(name),
        job:job
    }

    const duplicated  = await handleDuplicatedError('name',character.name,Character)
    const internalDuplicate = await handleEditDuplicatedError(character.name,Character,id)

    if(duplicated){
        if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }

        await Character.findByIdAndUpdate(id,character)
        res.json({message:`EDIT CHARACTER NAME = '${character.name}' JOB = '${character.job}`})
    }catch(err){
        handleHttpError(res,'ERROR_EDITED_CHARACTER',409)
    }
}

module.exports = {
    editCharacterServices
}