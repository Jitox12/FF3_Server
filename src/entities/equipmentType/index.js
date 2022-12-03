const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const EquipmentTypeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
)

EquipmentTypeSchema.plugin(mongooseDelete, {overrideMethods:'all'})
EquipmentTypeSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('equipmentTypes', EquipmentTypeSchema)