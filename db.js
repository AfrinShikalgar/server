const mongoose = require('mongoose');
const env = require('dotenv');
env.config({ path: `${__dirname}/.env` });

const mongoURI = `mongodb://localhost:27017/cloudpad`;

const connectToMongo = ()=> {

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },(error)=> {
        if (error) {
            console.log(error.message);
        } else {
            console.log("Conected to mongo cloud successfully");
        }
    });
    
}

module.exports = connectToMongo;