const EquipmentType = require('../../entities/equipmentType')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function createEquipmentTypeServices(req,res) {
    try{
        const equipmentType = new EquipmentType()
        req = matchedData(req)
        const {name} = req
    
        equipmentType.name = await toUpperCaseFirstKey(name)
    
        const duplicated = await handleDuplicatedError('name', equipmentType.name, EquipmentType)
    
        if(duplicated){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    
        equipmentType.save()
        res.json({message: `CREATED EQUIPMENT TYPE NAME = '${equipmentType.name}'`})
        }catch(err){
            handleHttpError(res,'ERROR_CREATED_MAGIC', 409)
        }
}

module.exports = {
    createEquipmentTypeServices
}