const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const MonsterSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        vitality:{
            type:Number
        },

        attack:{
            type:Number
        },
        endurance:{
            type:Number
        },
        guil:{
            type:Number
        },
        experience:{
            type:Number
        },
        level:{
            type:Number
        },
        img:{
            type:Object
        },
        element:{type:mongoose.Schema.Types.ObjectId(), ref:'element'},
        weakness:{type:[mongoose.Schema.Types.ObjectId()], ref:'weakness'}
    },
    
    {
        timestamps:true,
        versionKey:false
    }
)

MonsterSchema.plugin(mongooseDelete, {overrideMethods:'all'})
MonsterSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('abilities', MonsterSchema)