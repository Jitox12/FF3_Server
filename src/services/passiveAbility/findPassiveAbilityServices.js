const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const PassiveAbility = require('../../entities/passiveAbility')

const findPassiveAbilityServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req

        const paginateConf = {
            populate:{
                path:'element',
                select:{
                    name:1,
                    _id:0
                },
                strictPopulate:false,
                limit:limit,
                page:page
            }
        }


        const passiveAbilityList = await PassiveAbility.paginate({},paginateConf)
        res.json(passiveAbilityList)    
    }catch(err){
        handleHttpError(res, 'ERROR_FIND_ANY_ELEMENT',404)
    }
}

module.exports = {
    findPassiveAbilityServices
}