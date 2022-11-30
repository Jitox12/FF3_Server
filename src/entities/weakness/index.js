const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const WeaknessSchema = new mongoose.Schema(
    {
        element:{type:mongoose.Schema.Types.ObjectId(), ref:'element'},
        weapon:{type:mongoose.Schema.Types.ObjectId(),ref:'weapon'}    
    },

    {
        timestamps:true,
        versionKey:false
    }
)

WeaknessSchema.plugin(mongooseDelete, {overrideMethods:'all'})
WeaknessSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('weaknesses', WeaknessSchema)