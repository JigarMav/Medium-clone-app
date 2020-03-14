const express = require('express');
const app = express();
require('./db/mongoose')
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/user')
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user')

// sets the templating engine to ejs
app.set('view engine','ejs');

// incoming data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// static files
app.use(express.static(path.join(__dirname,"public")));

app.use(async (req,res,next)=>{
    try {
        const user = await User.findById('5e6cbd374ebcc64e04bbb51c');
        req.user = user;
       
        
    } catch (error) {
        console.log(error);
        
    }
    next();
});

app.use(blogRoutes);
app.use(authRoutes);
app.use('/user',userRoutes);


app.listen(3000,()=>{
    console.log("Connected!!");
});