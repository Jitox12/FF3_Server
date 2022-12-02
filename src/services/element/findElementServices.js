const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const Element = require('../../entities/element')

const findElementServices = async (req,res) => {
    const element = new Element()

    try{
        req = matchedData(req)
        const {limit, page} = req
        const elementList = await element.$model('elements', element).paginate({},{limit,page})

        res.json(elementList).status(200)
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_FIND_ANY_ELEMENT')
    }
}

module.exports = {
    findElementServices
}