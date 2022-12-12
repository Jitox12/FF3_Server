const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const Character_JobSchema = new mongoose.Schema(
    {
        job:{type:mongoose.Schema.Types.ObjectId, ref:'jobs'},
        character: {type:[mongoose.Schema.Types.ObjectId], ref:'characters'},
        img:{
            type:[Object]
        }
    },

    {
        timestamps:true,
        versionKey:false
    }
)

Character_JobSchema.plugin(mongooseDelete, {overrideMethods:'all'})
Character_JobSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('characters_jobs', Character_JobSchema)