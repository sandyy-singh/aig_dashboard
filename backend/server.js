const express = require('express');
const app = express()
require('colors')
const cors = require('cors')
require('dotenv').config()
const userRouter = require('./routers/userRouter')
const PORT = process.env.PORT || 5000
const connectDB = require('./mongoConnection/connection')

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)
connectDB()
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`.yellow)
})