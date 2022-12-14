const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const AbilitySchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        element:{type:mongoose.Schema.Types.ObjectId, ref:'elements'},

        damage:{
            type:Number
        },
        defense:{
            type:Number
        }   
    },
    
    {
        timestamps:true,
        versionKey:false
    }
)

AbilitySchema.plugin(mongooseDelete, {overrideMethods:'all'})
AbilitySchema.plugin(mongoosePaginate);

module.exports= mongoose.model('passiveAbilities', AbilitySchema)