const path = require('path');
const express = require('express');
/* para crear multiples rutas y mantenerlas en archivos separados */
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.html', {title: 'Home Page'});
    // res.sendFile(path.join(__dirname, '/views/index.html'))
    // console.log('all fine');
});

module.exports = router;