const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json()); //valida que las peticiones y respuestas sean en formato json

// Routes
app.use('/api/recursos', require('./routes/recursos.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Start server
app.listen(app.get('port'), ()=>{
    console.log(`Start server ${app.get('port')}`);
});