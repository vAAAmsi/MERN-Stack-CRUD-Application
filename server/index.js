const express = require('express')
const router = require('./routes/routes')
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')

const DataBase_Connection = require('./MongoDB Config/connection')



const app = express();
app.use(cors())
app.use(express.json())
app.use('/',router)

DataBase_Connection()

const PORT = process.env.PORT || 7070


app.listen(PORT,() => {
    console.log(`server started at ${PORT}`)
})