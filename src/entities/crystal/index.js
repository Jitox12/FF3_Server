const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const CrystalSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        job:{type:[mongoose.Schema.Types.ObjectId], ref:'Crystal'},
        
        img:{
            type:Object
        }
    },

    {
        timestamps:true,
        versionKey:false
    }
)

CrystalSchema.plugin(mongooseDelete, {overrideMethods:'all'})
CrystalSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('crystals', CrystalSchema)