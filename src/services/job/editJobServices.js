const Job = require('../../entities/job')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function editJobServices(req,res){
    try{
    req = matchedData(req)
    const {name, ability, detail,equipmentType,id} = req

    const job = {
        name:await toUpperCaseFirstKey(name),
        ability: ability,
        detail:detail,
        equipmentType:equipmentType
    }

    const duplicated = await handleDuplicatedError('name', job.name, Job)
    const internalDuplicate = await handleEditDuplicatedError(job.name, Job,id)
    if(duplicated){
        if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }

    Job.findByIdAndUpdate(id,job)
    res.json({message: `EDIT JOB NAME = '${job.name}' `})
    }catch(err){
        handleHttpError(res,'ERROR_EDITED_JOB', 409)
    }


}


module.exports = {
    editJobServices
}
