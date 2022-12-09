const mongoose = require('mongoose')

const {abilities,
    elements,
    armors,
    equipmentTypes,
    passiveAbilities,
    users,
    characters,
    weapons,
    magicTypes,
    magics,
    crystals,
    jobs, } = require('./documents')

const Ability = require('../../entities/ability')
const Armor = require('../../entities/armor')
const Character= require('../../entities/character')
const Crystal= require('../../entities/crystal')
const Element = require('../../entities/element')
const EquipmentType= require('../../entities/equipmentType')
const PassiveAbility= require('../../entities/passiveAbility')
const User= require('../../entities/user')
const Weapon= require('../../entities/weapon')
const Magic = require('../../entities/magic')
const MagicType = require('../../entities/magicType')
const Job = require('../../entities/job')


const dbConnect = require('../db/mongo')

dbConnect()

const importData = async() => {
   
    const entities = [
        Ability,Element,Armor,Character,Crystal,
        EquipmentType,PassiveAbility,User,Weapon,MagicType,Magic,Job
    ]

    const data = [
        abilities,elements,armors,characters,crystals,
        equipmentTypes,passiveAbilities,users,weapons,magicTypes,magics,jobs
    ]
    
    let i = 0
    for (const entity of entities) {
        await entity.deleteMany()
        await entity.insertMany(data[i])
        i++
    }

    console.log(`Base de datos Poblada`)
    process.exit()
}

importData()

