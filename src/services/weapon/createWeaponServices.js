const Weapon = require('../../entities/weapon')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError} = require('../../utils/handleDuplicatedError')

async function createWeaponServices(req,res){
  
    try{
    const weapon = new Weapon()
    req = matchedData(req)
    const {name, defense, damage, passiveAbility, equipmentType} = req
   
    weapon.name = await toUpperCaseFirstKey(name)

    const duplicated  = await handleDuplicatedError('name',weapon.name,Weapon)
    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
    weapon.defense = defense
    weapon.damage = damage
    weapon.passiveAbility = passiveAbility
    weapon.equipmentType = equipmentType

        weapon.save()
        res.json({message:`CREATED WEAPON NAME = '${weapon.name}' DEFENSE = '${weapon.defense}' DAMAGE = '${weapon.damage}' PASSIVE ABILITY = '${weapon.passiveAbility}' EQUIPMENT TYPE = '${weapon.equipmentType}'`})
    }catch(err){
        handleHttpError(res,'ERROR_CREATED_WEAPON',409)
    }
}

module.exports = {
    createWeaponServices
}