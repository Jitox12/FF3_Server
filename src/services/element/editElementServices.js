const Element = require('../../entities/element')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')

async function editElementServices(req,res){
  
    try{
    req = matchedData(req)
    const {name,id} = req
    
    const element = {
        name: await toUpperCaseFirstKey(name) ,
    }

    const duplicated  = await handleDuplicatedError('name',element.name,Element)
    const internalDuplicate = await handleEditDuplicatedError(element.name,Element,id)
    if(duplicated){
        if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }
        Element.findByIdAndUpdate(id,element)
        res.json({message:`EDIT ELEMENT NAME = '${element.name}' `})
    }catch(err){
        console.log(err);
        handleHttpError(res,'ERROR_EDITED_ELEMENT',409)
    }
}

module.exports = {
    editElementServices
}