const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const Character = require('../../entities/character')
const handlePaginateConfig = require('../../utils/handlePaginateConfig')

const findCharacterServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req


        const characterList = await Character.paginate({},{limit,page})
        res.json(characterList)
        
    }catch(err){
        console.log(err );
        handleHttpError(res, 'ERROR_FIND_ANY_CHARACTER',404)
    }
}

module.exports = {
    findCharacterServices
}