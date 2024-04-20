import { connect , connection } from "mongoose";

const conexion = {
    isConnected : false 
}


export async function MongoConnect () {
    if( conexion.isConnected) return

    const database = await connect("mongodb://localhost:27017/Usuarios")
    console.log( database.connection.db.databaseName)
    conexion.isConnected = database.connections[0].readyState
}


connection.on("connected" , () => console.log("Conexion Exitosa "))
connection.on("error" , () => console.log("Fallo Conexion"))