const express = require('express');
const app = express();


const path = require('path');

// settings ------------------------------
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// middlewares ------------------------------


// routes ------------------------------
const indexRoutes = require('./routes');
app.use(indexRoutes);

// static files ------------------------------
app.use(express.static(path.join(__dirname, 'public')))




// listening the server -----------------------------
const port = process.env.PORT || 8000;
app.listen(port);