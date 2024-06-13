const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogroutes = require('./routes/blogroutes');
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://sudhakargarg2193:Home3141@cluster0.es6paa6.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog routes
app.use('/blogs', blogroutes);

// Redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
