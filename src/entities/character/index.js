const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const CharacterSchema = new mongoose.Schema(
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

CharacterSchema.plugin(mongooseDelete, {overrideMethods:'all'})
CharacterSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('characters', CharacterSchema)