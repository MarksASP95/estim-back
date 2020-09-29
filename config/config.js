const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../variables.env') });

module.exports = {
    mongoose: {
        url: process.env.DB_MONGO,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        },
    },
    port: process.env.PORT
};