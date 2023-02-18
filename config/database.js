const mongoose = require('mongoose');
const dontenv = require('dotenv');
dontenv.config();

// Connect to DB
mongoose.connect(process.env.MONOGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(()=> console.log('MongoDB Database Connected'))
    .catch((err)=> console.log(err));


module.exports = databaseConfig;