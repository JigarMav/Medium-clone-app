const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;
const User = require('./user');

const PostSchema = new Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    image:{
        type:String
    },
    content:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
    },
    hidden: Boolean,
    date: { type: Date, default: Date.now },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
});

const Post = mongoose.model('Post',PostSchema);
module.exports = Post;