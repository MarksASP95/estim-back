const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log('Error connecting to the DB');
        console.log(error);
        process.exit(1); // stop the app
    }
}

module.exports = connectDB;