const express = require('express');
const router = express.Router();

router.get('/add-post',(req,res)=>{
    res.render('user/edit-post',{
    });
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