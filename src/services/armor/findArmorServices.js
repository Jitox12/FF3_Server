const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const Armor = require('../../entities/armor')
const handlePaginateConfig = require('../../utils/handlePaginateConfig')

const findArmorServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req
        const values = ['passiveAbility', 'equipmentType']

        const paginateConfig = await handlePaginateConfig(values)

        const armorList = await Armor.paginate({},{populate:paginateConfig ,limit,page})

        res.json(armorList)
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_FIND_ANY_ARMOR',404)
    }
}

module.exports = {
    findArmorServices
}