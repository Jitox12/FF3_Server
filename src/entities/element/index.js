const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const ElementSchema = new mongoose.Schema(
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

ElementSchema.plugin(mongooseDelete, {overrideMethods:'all'})
ElementSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('elements', ElementSchema)