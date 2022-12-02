const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            select:false
        },
        role:{
            type:['user','admin'],
            default:'user'
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

UserSchema.plugin(mongooseDelete, {overrideMethods:'all'})
UserSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('users', UserSchema)