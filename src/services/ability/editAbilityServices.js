const Ability = require('../../entities/ability')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function editAbilityServices(req,res){
    try{
        req = matchedData(req)
        const {name, damage, element,id} = req
        const ability = {
            name: await toUpperCaseFirstKey(name),
            damage,
            element
        }
        const duplicated = await handleDuplicatedError('name',ability.name, Ability)

        if(duplicated) {
            handleHttpError(res,'DUPLICATED_NAME', 409)
            return
        }
        
        await Ability.findByIdAndUpdate(id,ability)

        res.json(ability)
        

    }catch(err){
        console.log(err)
    handleHttpError(res,'ERROR_CREATED_ABILITY',409)
    }
}

module.exports = {
    editAbilityServices
}

