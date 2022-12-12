const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const ArmorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
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

ArmorSchema.plugin(mongooseDelete, {overrideMethods:'all'})
ArmorSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('armors', ArmorSchema)