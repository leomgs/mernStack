const mongoose = require('mongoose');
const URI = "mongodb://localhost/mern-tasks";
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(URI,{useNewUrlParser:true})
    .then(db=>{
        console.log('db connected')
    })
    .catch(error=>{
        console.error(error);
    });
module.exports = mongoose;
