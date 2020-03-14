const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;
const Post = require('./post');

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0)
            {
                throw new Error("Age must be positive")
            }
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Enter valid email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    avatar:{
        type:Buffer
    },
    description:{
        type:String,
    }
},{
    timestamps:true
});

UserSchema.virtual('posts',{
    ref:'Post',
    localField:'_id',
    foreignField:'owner'
});
const User = mongoose.model('User',UserSchema);
module.exports = User;