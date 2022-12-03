const Magic = require('../../entities/magic')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handlePaginateConfig = require('../../utils/handlePaginateConfig')

async function findMagicServices(req,res){
 try{
    req = matchedData(req)
    const {limit,page} = req
    const values = ['element', 'magicType']

    const paginateConfig = await handlePaginateConfig(values)
    const magicList = await Magic.paginate({},{populate:paginateConfig, limit:limit,page:page})

    res.json(magicList)
 }catch(err){
    handleHttpError(res,'ERROR_FIND_ANY_MAGIC',404)
 }
}


module.exports = {
    findMagicServices
}
