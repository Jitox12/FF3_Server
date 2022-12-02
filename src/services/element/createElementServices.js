const Element = require('../../entities/element')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')

async function createElementServices(req,res){
    const element = new Element()
    req = matchedData(req)
    const {name} = req

    const upperCaseName = toUpperCaseFirstKey(name)
    
    element.name = upperCaseName
    
    try{
    const duplicate  = await handleDuplicatedError('name',element.name,Element)
    if(duplicate){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
        element.save()
        res.json({message:`${element.name} Created`})
    }catch(err){
        console.log(err);
        handleHttpError(res)
    }
}

module.exports = {
    createElementServices
}
