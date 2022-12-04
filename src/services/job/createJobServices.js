const Job = require('../../entities/job')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function createJobServices(req,res){
    try{
    const job = new Job()
    req = matchedData(req)
    const {name,character, crystal, ability, detail,equipmentType} = req
        console.log(req)
    job.name = await toUpperCaseFirstKey(name)

    const duplicated = await handleDuplicatedError('name', job.name, Job)

    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }

    job.character = character
    job.crystal = crystal
    job.ability = ability
    job.detail = detail
    job.equipmentType = equipmentType

    job.save()
    res.json({message: `CREATED JOB NAME = '${job.name}' `})
    }catch(err){
        handleHttpError(res,'ERROR_CREATED_MAGIC', 409)
    }


}


module.exports = {
    createJobServices
}
