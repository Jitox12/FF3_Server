const Ability = require('../../entities/ability')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {handlePaginateConfig} = require('../../utils/handlePaginateConfig')

async function findAbilityServices(req,res){
    try{
        req = matchedData(req)
        const {limit, page} = req
        const values = ['element']
        const populateConfig = await handlePaginateConfig(values)

        const abilityList =  await Ability.paginate({},{populate:populateConfig, limit:limit, page:page})
        res.json(abilityList)
                                    
        
    }catch(err){
        console.log(err)
        handleHttpError(res,'ERROR_FIND_ANY_ABILITY',404)
    }
}


module.exports = {
    findAbilityServices
}

