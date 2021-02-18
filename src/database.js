const mongoose = require('mongoose');

// Cadena de conexión a Mongodb
const URI = 'mongodb://localhost/mern-stack-recursos';

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;