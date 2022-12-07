const EquipmentType = require('../../entities/equipmentType')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')

async function findEquipmentTypeServices(req,res) {
    try{
        req = matchedData(req)
        const {limit,page} = req

        const equipmentTypeList = await EquipmentType.paginate({},{limit,page})
        res.json(equipmentTypeList)

    }catch(err){
        handleHttpError(res,'ERROR_FIND_ANY_EQUIPMENT_TYPE',404)
    }
}

module.exports = {
    findEquipmentTypeServices
}