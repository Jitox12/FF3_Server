const Character_Job = require('../../entities/character_job')
const {handleDeleteImage} = require('../../utils/handleImagePath')
const {handleHttpError} = require('../../utils/handleError')
const { matchedData } = require('express-validator')

async function createCharacter_JobServices(req,res){
  try{
    const character_job = new Character_Job()
    req = matchedData(req)
    const {job,character,path} = req

    character_job.character = character
    character_job.job = job
    character_job.img = path 
    
    character_job.save()
    res.json({message: `CREATED CHARACTER_JOB`})
  }catch(err){
    handleDeleteImage(req.path)
    handleHttpError(res,'ERROR_CREATE_CHARACTER_JOB', 409)
  }
}

module.exports = {
    createCharacter_JobServices
}