import  mongoose  from "mongoose";

async function ConnectDb() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Successfully connected to the Database')
    } catch (error) {
         console.log(error)        
    }
   
}

export default ConnectDb;