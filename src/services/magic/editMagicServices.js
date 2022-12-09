const Magic = require('../../entities/magic')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const {handleDuplicatedError,handleEditDuplicatedError} = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function editMagicServices(req,res){
    try{
    req = matchedData(req)
    const {name,damage,element,magicType,id} = req

    const magic = {
        name: await toUpperCaseFirstKey(name),
        damage:damage,
        element:element,
        magicType:magicType
    }
    

    const duplicated = await handleDuplicatedError('name', magic.name, Magic)
    const internalDuplicate = await handleEditDuplicatedError(magic.name, Magic,id)

    if(duplicated){
        if(!internalDuplicate){
            handleHttpError(res,'DUPLICATED_NAME',409)
            return
        }
    }

    Magic.findByIdAndUpdate(id,magic)
    res.json({message: `EDIT MAGIC NAME = '${magic.name}' DAMAGE = '${magic.damage}'  ELEMENT = '${magic.element}' MAGICTYPE = '${magic.magicType}'   `})
    }catch(err){
        handleHttpError(res,'ERROR_EDITED_MAGIC', 409)
    }


}


module.exports = {
    editMagicServices
}
