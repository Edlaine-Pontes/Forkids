
const mongoose = require('mongoose')

const mongoUri = process.env.MONGODB_URL 

const connect = () => {
    mongoose.connect(mongoUri, {useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false}) 

        .then(() => console.log('Conectamos no Mongo.'))
        .catch((err) => console.log(err))

}

module.exports = {connect}