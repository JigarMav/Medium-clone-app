const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('blog/index',{

    });
});
router.get('/details',(req,res)=>{
    res.render('blog/details.ejs');
});
router.get('/about',(req,res)=>{
    res.render('blog/about.ejs');
});


module.exports = router;