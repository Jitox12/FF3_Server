const MagicType = require('../../entities/magicType')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')

async function findMagicTypeServices(req,res){
  
    try{
        req = matchedData(req)
        const {limit,page} = req

        const magicTypeList = await MagicType.paginate({},{limit,page})
        res.json(magicTypeList)

    }catch(err){
        handleHttpError(res,'ERROR_FIND_ANY_MAGIC_TYPE',404)
    }
}

module.exports = {
    findMagicTypeServices
}