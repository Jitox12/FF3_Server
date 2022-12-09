const PassiveAbility = require('../../entities/passiveAbility')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError} = require('../../utils/handleDuplicatedError')

async function createPassiveAbilityServices(req,res){
  
    try{
    const passiveAbility = new PassiveAbility()
    req = matchedData(req)
    const {name,element,damage,defense} = req

    passiveAbility.name = await toUpperCaseFirstKey(name)
    passiveAbility.element = element
    passiveAbility.damage = damage
    passiveAbility.defense = defense

    const duplicated  = await handleDuplicatedError('name',passiveAbility.name,PassiveAbility)
    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
        passiveAbility.save()
        res.json({message:` CREATED PASSIVE ABILITY NAME ='${passiveAbility.name}' ELEMENT = '${passiveAbility.element}' DAMAGE = '${passiveAbility.damage}' DEFENSE = '${passiveAbility.defense}'`})
    }catch(err){
        console.log(err);
        handleHttpError(res,'ERROR_CREATED_PASSIVE ABILITY',409)
    }
}

module.exports = {
    createPassiveAbilityServices
}