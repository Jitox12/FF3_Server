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
        passiveAbility:{type:mongoose.Schema.Types.ObjectId, ref:'passiveAbility'},
        type:{type:mongoose.Schema.Types.ObjectId, ref:'Type'},
        
        img:{
            type:Object
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

WeaponSchema.plugin(mongooseDelete, {overrideMethods:'all'})
WeaponSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('weapons', WeaponSchema)