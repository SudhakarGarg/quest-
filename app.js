const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogroutes = require('./routes/blogroutes');
const app = express();
//connect to mongodb
const dbURI='mongodb+srv://sudhakargarg2193:Home3141@cluster0.es6paa6.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI ,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=> app.listen(3000))
.catch((err)=> console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Start the server
//app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//--------------------------------------------------------------------
/*
app.use((req,res,next)=>
{
   console.log('new request made:');
   console.log('host:',req.hostname);
   console.log('path:',req.path);
   console.log('method:',req.method);
   next();
});
app.use((req,res,next)=>
{
   console.log('in the next middleware:');
   next();
});
*/

app.use(morgan('dev'));
//----------------------------------------------------------------------



// Routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about',{title:'About'}); // Renders the 'about.ejs' view
});

// blog routes
app.use('/blogs',blogroutes);


// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about'); // Redirects /about-us to /about
});

// 404 Page
app.use((req, res) => {
    res.status(404).render('404',{title:'404'}); // Renders the '404.ejs' view with a 404 status
});
