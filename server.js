const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const PORT = 8000;


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})