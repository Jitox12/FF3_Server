const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const MagicTypeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        img:{
            type:Object,
        }
        
    },

    {
        timestamps:true,
        versionKey:false
    }
)

MagicTypeSchema.plugin(mongooseDelete, {overrideMethods:'all'})
MagicTypeSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('magicTypes', MagicTypeSchema)