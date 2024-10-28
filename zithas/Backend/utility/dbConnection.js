import mongoose from "mongoose";

async function dbConnection() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Connected to the Database');
    } catch (error) {
        console.log(error)
    }
}

export default dbConnection;