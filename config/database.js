const mongoose = require('mongoose');
const dontenv = require('dotenv');
dontenv.config();

// Database connection string
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/burger-builder';

mongoose.set('strictQuery', false);
// Connect to DB
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('MongoDB Database Connected'))
    .catch((err)=> console.log(err));

