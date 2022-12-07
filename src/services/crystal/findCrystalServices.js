const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const Crystal = require('../../entities/crystal')
const handlePaginateConfig = require('../../utils/handlePaginateConfig')

const findCrystalServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req
        const values = ['job']

        const paginateConfig = await handlePaginateConfig(values)

        const crystalList = await Crystal.paginate({},{populate:paginateConfig ,limit,page})
        res.json(crystalList)
        
    }catch(err){
        console.log(err );
        handleHttpError(res, 'ERROR_FIND_ANY_CRYSTAL',404)
    }
}

module.exports = {
    findCrystalServices
}