const Armor = require('../../entities/armor')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError} = require('../../utils/handleDuplicatedError')

async function createArmorServices(req,res){
  
    try{
    const armor = new Armor()
    req = matchedData(req)
    const {name, defense, passiveAbility, equipmentType} = req
   
    armor.name = await toUpperCaseFirstKey(name)

    const duplicated  = await handleDuplicatedError('name',armor.name,Armor)
    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
    armor.defense = defense
    armor.passiveAbility = passiveAbility
    armor.equipmentType = equipmentType

        armor.save()
        res.json({message:`CREATED ARMOR NAME = '${armor.name}' DEFENSE = '${armor.defense}' DAMAGE = '${armor.damage}' PASSIVE ABILITY = '${armor.passiveAbility}' EQUIPMENT TYPE = '${armor.equipmentType}'`})
    }catch(err){
        console.log(err);
        handleHttpError(res,'ERROR_CREATED_ARMOR',409)
    }
}

module.exports = {
    createArmorServices
}