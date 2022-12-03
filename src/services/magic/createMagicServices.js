const Magic = require('../../entities/magic')
const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const handleDuplicatedError = require('../../utils/handleDuplicatedError')
const {toUpperCaseFirstKey} = require('../../utils/handleUpperCase')

async function createMagicServices(req,res){
    try{
    const magic = new Magic()
    req = matchedData(req)
    const {name,damage,element,magicType} = req

    magic.name = await toUpperCaseFirstKey(name)

    const duplicated = await handleDuplicatedError('name', magic.name, Magic)

    if(duplicated){
        handleHttpError(res,'DUPLICATED_NAME',409)
        return
    }

    magic.damage = damage
    magic.element = element
    magic.magicType = magicType

    magic.save()
    res.json({message: `CREATED MAGIC NAME = '${magic.name}' DAMAGE = '${magic.damage}'  ELEMENT = '${magic.element}' MAGICTYPE = '${magic.magicType}'   `})
    }catch(err){
        handleHttpError(res,'ERROR_CREATED_MAGIC', 409)
    }


}


module.exports = {
    createMagicServices
}
