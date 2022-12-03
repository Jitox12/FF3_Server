const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const MagicSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        damage:{
            type:Number
        },
        magicType:{type:mongoose.Schema.Types.ObjectId,  ref:'magicTypes'},
        element:{type:mongoose.Schema.Types.ObjectId, ref:'elements'}
    },

    {
        timestamps:true,
        versionKey:false
    }
)

MagicSchema.plugin(mongooseDelete, {overrideMethods:'all'})
MagicSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('magics', MagicSchema)