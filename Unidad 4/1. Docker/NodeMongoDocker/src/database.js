const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mymongodatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conectado a. ', db.connection.host))
.catch(err => console.error(err));