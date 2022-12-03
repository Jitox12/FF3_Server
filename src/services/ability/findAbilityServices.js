const Ability = require('../../entities/ability')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')

async function findAbilityServices(req,res){
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

        const abilityList =  await Ability.paginate({},paginateConf)
        res.json(abilityList)
                                    
        
    }catch(err){
        console.log(err)
        handleHttpError(res,'ERROR_FIND_ANY_ABILITY',404)
    }
}


module.exports = {
    findAbilityServices
}

