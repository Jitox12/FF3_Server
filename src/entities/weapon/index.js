const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const WeaponSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        damage:{
            type:Number,
        },
        defense:{
            type:Number,
        },
        passiveAbility:{type:mongoose.Schema.Types.ObjectId, ref:'passiveAbilities'},
        equipmentType:{type:mongoose.Schema.Types.ObjectId, ref:'equipmentTypes'},

    },
    {
        timestamps:true,
        versionKey:false
    }
)

WeaponSchema.plugin(mongooseDelete, {overrideMethods:'all'})
WeaponSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('weapons', WeaponSchema)