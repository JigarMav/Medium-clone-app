const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.get('/add-post',(req,res)=>{
    res.render('user/edit-post',{
    });
});

router.post('/add-post',async (req,res)=>{
    const title = req.body.title;
    const image = req.body.image;
    const content = req.body.content;
    const hiddenString = req.body.hidden;
    console.log(req.body);
    const hidden = (hiddenString==='true');
    
    try {
        const post = new Post({
            title:title,
            image:image,
            content:content,
            hidden:hidden,
            owner:req.user._id
        });
        await post.save();
    } catch (error) {
        console.log(error);
        
    }
    res.redirect('/');
});
router.get('/myposts',(req,res)=>{
    res.render('user/myposts',{
    });
});
router.get('/profile',(req,res)=>{
    res.render('user/profile',{
    });
});
module.exports = router;