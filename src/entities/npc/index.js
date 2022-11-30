const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const NPCSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        img:{
            type:Object
        },
        town:{
            type:[mongoose.Schema.Types.ObjectId()], ref:'town'
        }
    },
    
    {
        timestamps:true,
        versionKey:false
    }
)

NPCSchema.plugin(mongooseDelete, {overrideMethods:'all'})
NPCSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('npcs', NPCSchema)