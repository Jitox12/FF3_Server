const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const Armor = require('../../entities/armor')
const {handlePaginateConfig, handlePostPaginateConfig} = require('../../utils/handlePaginateConfig')
const mongoose = require('mongoose')

const findArmorServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req
        const values = ['passiveAbility', 'equipmentType']
        const secondValues = ['element']
        
        const paginateConfig = await handlePaginateConfig(values)
        const secondPaginateConfig = await handlePaginateConfig(secondValues)

        const completePaginateConfig = await handlePostPaginateConfig(paginateConfig, secondPaginateConfig)

        const armorList = await Armor.paginate({},{populate:completePaginateConfig},limit,page)
        res.json(armorList)

    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_FIND_ANY_ARMOR',404)
    }
}
module.exports = {
    findArmorServices
}