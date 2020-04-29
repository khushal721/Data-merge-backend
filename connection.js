const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/exampledb';

mongoose.connect(url, {useNewUrlParser: true})
.then( () => {
    console.log('database connected successfully');
})
.catch( err => {
    console.log(err)
})

module.exports = mongoose;