const Weapon = require('../../entities/weapon')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')

async function editWeaponServices(req,res){
  
    try{
    req = matchedData(req)
    const {name, defense, damage, passiveAbility, equipmentType,id} = req
   
    const weapon = {
        name : await toUpperCaseFirstKey(name),
        defense:defense,
        damage:damage,
        passiveAbility:passiveAbility,
        equipmentType:equipmentType
    }

    const duplicated  = await handleDuplicatedError('name',weapon.name,Weapon)
    const internalDuplicate = await handleEditDuplicatedError(weapon.name,Weapon,id)

    if(duplicated){
        if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }
    Weapon.findByIdAndUpdate(id,weapon)
        res.json({message:`EDIT WEAPON NAME = '${weapon.name}' DEFENSE = '${weapon.defense}' DAMAGE = '${weapon.damage}' PASSIVE ABILITY = '${weapon.passiveAbility}' EQUIPMENT TYPE = '${weapon.equipmentType}'`})
    }catch(err){
        handleHttpError(res,'ERROR_EDITED_WEAPON',409)
    }
}

module.exports = {
    editWeaponServices
}