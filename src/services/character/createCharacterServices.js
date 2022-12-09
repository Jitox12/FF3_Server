const Character = require('../../entities/character')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError} = require('../../utils/handleDuplicatedError')

async function createCharacterServices(req,res){
  
    try{
    const character = new Character()
    req = matchedData(req)
    const {name, job} = req
   
    character.name = await toUpperCaseFirstKey(name)

    const duplicated  = await handleDuplicatedError('name',character.name,Character)
    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
    character.job = job

        character.save()
        res.json({message:`CREATED CHARACTER NAME = '${character.name}' JOB = '${character.job}`})
    }catch(err){
        handleHttpError(res,'ERROR_CREATED_CHARACTER',409)
    }
}

module.exports = {
    createCharacterServices
}