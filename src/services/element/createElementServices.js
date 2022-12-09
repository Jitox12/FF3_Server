const Element = require('../../entities/element')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError} = require('../../utils/handleDuplicatedError')

async function createElementServices(req,res){
  
    try{
    const element = new Element()
    req = matchedData(req)
    const {name} = req
   
    element.name = await toUpperCaseFirstKey(name)

    const duplicated  = await handleDuplicatedError('name',element.name,Element)
    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }
        element.save()
        res.json({message:`CREATED ELEMENT NAME = '${element.name}' `})
    }catch(err){
        console.log(err);
        handleHttpError(res,'ERROR_CREATED_ELEMENT',409)
    }
}

module.exports = {
    createElementServices
}