// const mongoose = require("mongoose");

// const connectToDatabase = async () =>
//     await mongoose.connect(process.env.DB_CONNECTION_STRING || '', {
//         useFindAndModify: false,
//         autoIndex: false, // Don't build indexes
//         reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//         reconnectInterval: 500, // Reconnect every 500ms
//         poolSize: 10, // Maintain up to 10 socket connections
//         // If not connected, return errors immediately rather than waiting for reconnect
//         bufferMaxEntries: 0,
//         useNewUrlParser: true
//     })

// module.exports = { connectToDatabase };