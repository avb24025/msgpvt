//first check db is connected or not
import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number;
}

const connection:ConnectionObject={};

async function dbConnect():Promise<void>{   
    if(connection.isConnected){
        console.log("Already connected");
        return;
    }
    if(mongoose.connections.length>0){
        connection.isConnected=mongoose.connections[0].readyState;
        if(connection.isConnected===1){
            console.log("Use previous connection");
            return;
        }   

        await mongoose.disconnect();
        console.log("Disconnected from previous connection");
    }
    const db=await mongoose.connect(process.env.MONGO_URI!);
    console.log("New connection established");
    connection.isConnected=db.connections[0].readyState;
}   
export default dbConnect;

