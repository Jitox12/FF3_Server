const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const JobSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        ability:{type:mongoose.Schema.Types.ObjectId, ref:'abilities'},
        equipmentType: {type:[mongoose.Schema.Types.ObjectId], ref:'equipmentTypes'},

        detail:{
            type:String,
        },
        img:{
            type:[Object]
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