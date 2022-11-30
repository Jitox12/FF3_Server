const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const TownSchema = new mongoose.Schema(
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

TownSchema.plugin(mongooseDelete, {overrideMethods:'all'})
TownSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('towns', TownSchema)