const Armor = require('../../entities/armor')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')

async function editArmorServices(req,res){
  
    try{
    req = matchedData(req)
    const {name, defense, passiveAbility, equipmentType,id} = req
   
    const armor = {
        name: await toUpperCaseFirstKey(name),
        defense: defense,
        passiveAbility:passiveAbility,
        equipmentType: equipmentType,
    }

    const duplicated  = await handleDuplicatedError('name',armor.name,Armor,id)
    const internalDuplicate = await  handleEditDuplicatedError(armor.name,Armor,id)

    if(duplicated){
        if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }
        await Armor.findByIdAndUpdate(id,armor)

        res.json({message:`EDIT ARMOR NAME = '${armor.name}' DEFENSE = '${armor.defense}' PASSIVE ABILITY = '${armor.passiveAbility}' EQUIPMENT TYPE = '${armor.equipmentType}'`})

    }catch(err){
        handleHttpError(res,'ERROR_EDITED_ARMOR',409)
    }
}

module.exports = {
    editArmorServices
}