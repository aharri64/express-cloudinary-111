// 1 - Environment
require('dotenv').config();
// 2 - Imports
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const multer = require('multer');
const cloudinary = require('cloudinary');
// uploader for images, make a uploads folder, pass through the route as middleware
const uploads = multer({ dest: './uploads'});

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

// Need this in various cases...
// app.get('/images', (req, res) => {
//     res.render('index');
// })

app.get('/images/new', (req, res) => {
    res.render('new');
});

app.post('/images', uploads.single('inputFile'), (req, res) => {
    // grab the uploaded file
    const image = req.file.path;
    console.log(image);
    // upload image to cloudinary
    cloudinary.uploader.upload(image, (result) => {
        // the result that comes back from cloudinary
        console.log(result);
        res.render('index', { image: result.url })
    })

})

// Listen on PORT 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is jamming to PORT: ${PORT} 🎧`);
});
