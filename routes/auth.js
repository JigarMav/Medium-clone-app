const express = require('express');
const User = require('../models/user')
const router = express.Router();

router.get('/login',(req,res)=>{
    res.render('auth/login',{
    });
});
router.get('/register',(req,res)=>{
    res.render('auth/register',{
    });
});

router.post('/register',async (req,res)=>{
    const name = req.body.name;
    const avatar = req.body.avatar;
    const age = req.body.age;
    const description = req.body.description;
    const password = req.body.password;
    const email = req.body.email;
    console.log(req.body);
    
    try {
        const user = new User({
            name:name,
            age:age,
            email:email,
            password:password,
            avatar:avatar,
            description:description
        });
        await user.save();
    } catch (error) {
        console.log(error);
        
    }
    res.redirect('/')
})

module.exports = router;