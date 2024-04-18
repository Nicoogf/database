// import  { connect , connection } from "mongoose";

// const conn = {
//     isConected : false
// }

// export async function ConnectMongoDB () {
//         if(conn.isConected) return
   
//         const db = await connect( "mongodb://localhost:27017/Tareas")
//         console.log(db.connection.db.databaseName)
//         conn.isConected = db.connections[0].readyState
  
// } 

//         connection.on("connected" , () => {
//             console.log("mongodb conectado")
//         })

//         connection.on("error" , (err)=> {
//             console.log("mongoose conection error : " , err)
//         })


// import { connect , connection  } from "mongoose";

// const conn = {
//     isConected : false
// }


// export async function ConnectMongoDB() {
//     if(conn.isConected) return

//     const db = await connect("mongodb://localhost:27017/Tareas")
//     console.log(db.connection.db.databaseName)
//     conn.isConected = db.connections[0].readyState
//     console.log(db.connections[0].readyState)
// }

// connection.on("connected" , () => console.log("mongo db conectado"))

// connection.off("error" , ()=> console.log ("algo salio mal"))


// import { connect , connection } from "mongoose";

// const conn = {
//     isConnected : false
// }

// export async function ConnectMongoDB () {
//     if( conn.isConnected ) return

//     const bd = await connect("mongodb://localhost:27017/Tareas")
//     console.log(bd.connection.db.databaseName)
//     conn.isConnected = bd.connections[0].readyState  
// }

// connection.on("connected" , () => console.log("Conexion exitosa"))
// connection.on("error" , ()=> console.log( " algo salio mal" ))


// import { connect, connection } from "mongoose";

// const conn = {
//     isConected : false
// }


// export async function ConnectMongoDB () {
//     if( conn.isConected) return

//     const db = await connect("mongodb://localhost:27017/Tareas")
//     console.log(db.connection.db.databaseName)
//     conn.isConected = db.connections[0].readyState
// }


// connection.on("connected" , () => console.log("Conexion exitosa"))
// connection.on("error" , () => console.log("error al conectar"))

// import { connect , connection  } from "mongoose";

// const conn = {
//     isConneted : false 
// }

// export async function ConnectMongoDB () {
//     if (conn.isConneted) return
//     const DATABASE = await connect("mongodb://localhost:27017/Tareas")
//     console.log(DATABASE.connection.db.databaseName)
//     conn.isConneted =  DATABASE.connections[0].readyState
// }

// connection.on("conected" , () => console.log("Conexion exitosa a la base de datos"))
// connection.on("error" , () => console.log("algo salio mal al conectarse"))

// import { connect , connection } from "mongoose";

// const conn = {
//     isConnected : false
// }

// export async function ConnectMongoDB () {
//     if ( conn.isConnected ) return

//     const DATABASE = await connect("mongodb://localhost:27017/Tareas")
//     console.log( DATABASE.connection.db.databaseName)
//     conn.isConnected = DATABASE.connections[0].readyState
// }

// connection.on("connected" , () => console.log("La conexion a la database fue exitosa"))
// connection.on("error" , () => console.log("La conexion a la database fallo"))

// import { connect , connection } from "mongoose";

// const conn ={
//     isConnected : false
// }


// export async function ConnectMongoDB() {
//     if( conn.isConnected) return

//     const DATABASE = await connect("mongodb://localhost:27017/Tareas")
//     console.log( DATABASE.connection.db.databaseName)
//     conn.isConnected = DATABASE.connections[0].readyState
// }

// connection.on("connected" , ()=> console.log("Conexion Exitosa"))
// connection.on("error" , ()=> console.log("No se pudo conectar a la Base de Datos"))


import { connect , connection  } from "mongoose";

const conn = {
    isConnected : false
}


export async function ConnectMongoDB () {
    if ( conn.isConnected) return 

    const DATABASE = await connect("mongodb://localhost:27017/Tareas")
    conn.isConnected = DATABASE.connections[0].readyState
}

connection.on("connected" , () => console.log("Conexion exitosa"))
connection.on("error" , () => console.log("Hubo un error al conectar el DATABASE"))