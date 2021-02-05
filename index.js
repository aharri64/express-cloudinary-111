// 1 - Environment
require('dotenv').config();
// 2 - Imports
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const multer = require('multer');
const cloudinary = require('cloudinary');
// 3 - App Set up
const app = express();
app.set('view engine', 'ejs');
// 4 - App Middleware
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false })); // able to access req.body
// 5 - Routes
app.get('/', function(req, res) {
    res.send('Welcome to my Express Cloudinary App');
});

// Listen on PORT 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is jamming to PORT: ${PORT} 🎧`);
});
