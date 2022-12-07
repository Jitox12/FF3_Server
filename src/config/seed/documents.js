const abilities = [{
    _id:'638f6c77d54a9f4c28b1f5bd',
    name:'Ímpetu',
    damage: '5',
    element:'638f6c240404ab4cef82d80a'
}]
const armors = [{
    name:"Armadura de Espinas",
    defense: 10,
    passiveAbility:'638aedf96c9ab71976bf7d0f',
    equipmentType:'638bb70f3024df3a47bef115'
}]


const elements = [{
    _id:'638f6c240404ab4cef82d80a',
    name:'Normal'
}]

const equipmentTypes = [{
    _id:'638bb70f3024df3a47bef115',
    name:"Armadura Pesada"

}]

const passiveAbilities = [{
    _id:'638aedf96c9ab71976bf7d0f',
    name:'Pinchar',
    element:'638f6c240404ab4cef82d80a',
    damage:10,
    defense:5
}]

const users = [{
    name:'admin',
    email:'admin@email.com',
    password:'$2b$10$Ugj7x5ZPJZrHi7vrubIQyuNcPnVCnFuhtPcQ1SGWFZHutVg.M0ymO', //12345
    role:'admin'
}]
const characters = [{
    _id:'638d05563b176382b73f3825',
    name:'Luneth',
    job:'638d02bc96c03f9a1c117301',
}]

const crystals = [{
    _id:'638d051b3b176382b73f3822',
    name:'Wind Crystal'
}]

const jobs = [{
    _id:'638d02bc96c03f9a1c117301',
    name:'Warrior',
    ability:'638f6c77d54a9f4c28b1f5bd',
    equipmentTypes:['638bb70f3024df3a47bef115'],
    detail:'Warriors are weapon experts. Their Advance ability allows them to deal even more damage than normal, but they also get hit a lot harder.'
}]

const magics = [{
    _id:'638b97491764024ac1bb7268',
    name:'Fire+',
    damage:5,
    magicType:'638ac54421e12133a922c156',
    element:'638f6c240404ab4cef82d80a'

}]

const magicTypes=[{
    _id:'638ac54421e12133a922c156',
    name:'Black',
}]

const weapons =[{
    name:'Espada',
    damage:10,
    defense:0,
    passiveAbilities:'638aedf96c9ab71976bf7d0f',
    equipmentTypes:'638bb70f3024df3a47bef115'
}]


module.exports = {
    abilities,
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
    jobs
}