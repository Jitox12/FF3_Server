const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const PassiveAbility = require('../../entities/passiveAbility')
const handlePaginateConfig = require('../../utils/handlePaginateConfig')

const findPassiveAbilityServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req

        const values = ['element']
        const populateConfig = await handlePaginateConfig(values)

        const passiveAbilityList = await PassiveAbility.paginate({},{populate:populateConfig,limit:limit, page:page})

        res.json(passiveAbilityList)                        
    }catch(err){
        handleHttpError(res, 'ERROR_FIND_ANY_PASSIVE_ABILITY',404)
    }
}

module.exports = {
    findPassiveAbilityServices
}