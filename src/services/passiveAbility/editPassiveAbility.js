const PassiveAbility = require('../../entities/passiveAbility')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')

async function editPassiveAbilityServices(req,res){
  
    try{
    req = matchedData(req)
    const {name,element,damage,defense,id} = req
    
    const passiveAbility = {
        name: await toUpperCaseFirstKey(name),
        element:element,
        damage:damage,
        defense:defense
    }

    const duplicated  = await handleDuplicatedError('name',passiveAbility.name,PassiveAbility)
    const internalDuplicate = await handleEditDuplicatedError(passiveAbility.name,PassiveAbility,id)

    if(duplicated){
      if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }
        PassiveAbility.findByIdAndUpdate(id,passiveAbility)
        res.json({message:` EDIT PASSIVE ABILITY NAME ='${passiveAbility.name}' ELEMENT = '${passiveAbility.element}' DAMAGE = '${passiveAbility.damage}' DEFENSE = '${passiveAbility.defense}'`})
    }catch(err){
        console.log(err);
        handleHttpError(res,'ERROR_EDITED_PASSIVE ABILITY',409)
    }
}

module.exports = {
    editPassiveAbilityServices
}