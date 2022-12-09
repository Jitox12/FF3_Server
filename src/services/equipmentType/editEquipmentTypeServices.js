const EquipmentType = require('../../entities/equipmentType')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {handleDuplicatedError, handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function editEquipmentTypeServices(req,res) {
    try{
        req = matchedData(req)
        const {name,id} = req

        const equipmentType = {
            name:await toUpperCaseFirstKey(name)
        }

        const duplicated = await handleDuplicatedError('name', equipmentType.name, EquipmentType)
        const internalDuplicate = await handleEditDuplicatedError(equipmentType.name, EquipmentType,id)
    
        if(duplicated){
            if(!internalDuplicate){
                handleHttpError(res,'DUPLICATED_NAME',409)
                return
            }
        }
    
        EquipmentType.findByIdAndUpdate(id,equipmentType)
        res.json({message: `EDIT EQUIPMENT TYPE NAME = '${equipmentType.name}'`})
        }catch(err){
            handleHttpError(res,'ERROR_EDITED_EQUIPMENT_TYPE', 409)
        }
}

module.exports = {
    editEquipmentTypeServices
}