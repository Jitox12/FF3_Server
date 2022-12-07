const Ability = require('../../entities/ability')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function createAbilityServices(req,res){
    try{    
        const ability = new Ability()
        req = matchedData(req)
        const {name, damage, element} = req
                       
        ability.name = await toUpperCaseFirstKey(name)
        ability.damage = damage
        ability.element = element

        const duplicated = await handleDuplicatedError('name',ability.name,Ability)
        
        if(duplicated){
            handleHttpError(res,'DUPLICATED_NAME', 409)
            return
        }
        ability.save()
        res.json({message: `CREATE ABLITY  NAME = '${ability.name}' DAMAGE = '${ability.damage}' ELEMENT = '${ability.element}'`})

    }catch(err){
        console.log(err)
    handleHttpError(res,'ERROR_CREATED_ABILITY',409)
    }
}

module.exports = {
    createAbilityServices
}

