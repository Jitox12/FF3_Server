const EquipmentType = require('../../entities/equipmentType')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {handleDuplicatedError} = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDeleteImage} = require('../../utils/handleImagePath')

async function createEquipmentTypeServices(req,res) {
    try{
        const equipmentType = new EquipmentType()
        req = matchedData(req)
        const {name,path} = req

        equipmentType.name = await toUpperCaseFirstKey(name)
        const duplicated = await handleDuplicatedError('name', equipmentType.name, EquipmentType)
    
        if(duplicated){
            handleDeleteImage(path)
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
        equipmentType.img = path
        equipmentType.save()
        res.json({message: `CREATED EQUIPMENT TYPE NAME = '${equipmentType.name}'`})
        }catch(err){
            handleDeleteImage(req.path)
            handleHttpError(res,'ERROR_CREATED_EQUIPMENT_TYPE', 409)
        }
}

module.exports = {
    createEquipmentTypeServices
}