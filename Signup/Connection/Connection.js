import mongoose from "mongoose";
import chalk from "chalk";



const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(chalk.blueBright('Database Connected Successfully'))
    } catch (error) {
        console.log(error);
    }
}

export default dbConnection;