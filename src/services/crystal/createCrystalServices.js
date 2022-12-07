const Crystal = require('../../entities/crystal')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')

async function createCrystalServices(req,res){
  
    try{
    const crystal = new Crystal()
    req = matchedData(req)
    const {name, job} = req
   
    crystal.name = `${await toUpperCaseFirstKey(name)} Crystal`

    const duplicated  = await handleDuplicatedError('name',crystal.name,Crystal)
    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
    crystal.job = job

        crystal.save()
        res.json({message:`CREATED CRYSTAL NAME = '${crystal.name}' JOB = '${crystal.job}`})
    }catch(err){
        handleHttpError(res,'ERROR_CREATED_CRYSTAL',409)
    }
}

module.exports = {
    createCrystalServices
}