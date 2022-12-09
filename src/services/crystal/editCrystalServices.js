const Crystal = require('../../entities/crystal')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')

async function editCrystalServices(req,res){
  
    try{
    req = matchedData(req)
    const {name, job,id} = req
    const crystal = {
        name:`${await toUpperCaseFirstKey(name)} Crystal`,
        job:job,
    }

    const duplicated  = await handleDuplicatedError('name',crystal.name,Crystal)
    const internalDuplicate = await handleEditDuplicatedError(crystal.name,Crystal,id)

    if(duplicated){
        if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }
        Crystal.findByIdAndUpdate(id,crystal)

        res.json({message:`EDIT CRYSTAL NAME = '${crystal.name}' JOB = '${crystal.job}`})
    }catch(err){
        handleHttpError(res,'ERROR_CREATED_CRYSTAL',409)
    }
}

module.exports = {
    editCrystalServices
}