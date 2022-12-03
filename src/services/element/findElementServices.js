const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const Element = require('../../entities/element')

const findElementServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req

        const elementList = await Element.paginate({},{limit,page})
        res.json(elementList)
    }catch(err){
        handleHttpError(res, 'ERROR_FIND_ANY_ELEMENT',404)
    }
}

module.exports = {
    findElementServices
}