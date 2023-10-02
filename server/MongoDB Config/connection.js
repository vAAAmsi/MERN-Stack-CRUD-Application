const mongoose = require('mongoose')

const URI = process.env.MongoDb_URI

const DataBase_Connection = async() => {
    try{
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected')
    } catch(error){
        console.log(error)
    }
}

module.exports = DataBase_Connection;