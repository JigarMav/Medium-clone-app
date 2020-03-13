const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user')

// sets the templating engine to ejs
app.set('view engine','ejs');

// incoming data
app.use(bodyParser.urlencoded({extended:false}));

// static files
app.use(express.static(path.join(__dirname,"public")));

app.use(blogRoutes);
app.use(authRoutes);
app.use('/user',userRoutes);


app.listen(3000,()=>{
    console.log("Connected!!");
});