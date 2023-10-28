const mongoose = require('mongoose');
require('colors');
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO)
    console.log(`connected to database ${conn.connection.host}`.blue)
}
module.exports = connectDB