const {matchedData} = require('express-validator')
const {handleHttpError} = require('../../utils/handleError')
const Weapon = require('../../entities/weapon')
const handlePaginateConfig = require('../../utils/handlePaginateConfig')

const findWeaponServices = async (req,res) => {
    try{
        req = matchedData(req)
        const {limit, page} = req
        const values = ['passiveAbility', 'equipmentType']

        const paginateConfig = await handlePaginateConfig(values)

        const weaponList = await Weapon.paginate({},{populate:paginateConfig ,limit,page})

        res.json(weaponList)
    }catch(err){
        handleHttpError(res, 'ERROR_FIND_ANY_WEAPON',404)
    }
}

module.exports = {
    findWeaponServices
}