const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const JobSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        character:{type:mongoose.Schema.Types.ObjectId, ref:'character'},
        crystal:{type:mongoose.Schema.Types.ObjectId, ref:'Crystal'},
        ability:{type:mongoose.Schema.Types.ObjectId, ref:'ability'},
        
        detail:{
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

JobSchema.plugin(mongooseDelete, {overrideMethods:'all'})
JobSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('jobs', JobSchema)