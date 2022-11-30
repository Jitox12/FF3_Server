const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const DungeonSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        img:{
            type:Object
        }
    },

    {
        timestamps:true,
        versionKey:false
    }
)

DungeonSchema.plugin(mongooseDelete, {overrideMethods:'all'})
DungeonSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('dungeons', DungeonSchema)