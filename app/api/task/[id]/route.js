import Task from "@/app/models/Task"
import { ConnectMongoDB } from "@/app/utils/mongoose"
import { connect } from "mongoose"
import { NextResponse } from "next/server"




// export async function GET( req , {params} ){
//    try {
//     ConnectMongoDB()
//     const tareaEncontrada = await Task.findById( params.id )

//     if( !tareaEncontrada ) {
//         return NextResponse.json({
//             message : "No se encontro tarea"
//         } , { status : 404 })
//     }
    
//     return NextResponse.json({
//         message : "Busco informacion sobre la tarea" ,
//         tareaEncontrada
//     })
//    } catch (error) {
//       return NextResponse.json({
//         status: 400
//       })  
//    }
    
// }



export async function GET( request , {params}) {
    ConnectMongoDB()
    try {
        const tareaEncontrada = await Task.findById(params.id)

        if( !tareaEncontrada) return NextResponse.json({message : "No se encontro tarea"})
        return NextResponse.json(tareaEncontrada)
    } catch (error) {
        return NextResponse.json(error)
    }
}








// export async function PUT( request , {params} ) {
//     try {
//         ConnectMongoDB()
//         const data = await request.json()
//         const TareaActualizada = await Task.findByIdAndUpdate( params.id , data , {new : true} )
//         return NextResponse.json({
//          message : "Tarea actualizada exitosamente" ,
//          TareaActualizada
//         })
//     } catch (error) {
//         return NextResponse.json({
//             error
//         })
//     }
  
// }



// export async function PUT( request, { params } ) {
    

//     try {
//         ConnectMongoDB()
//         const data = await request.json()
//         const TareaActualizada = await Task.findByIdAndUpdate( params.id , data , {new : true })
//         return NextResponse.json(TareaActualizada)
//     } catch (error) {
//         NextResponse.json( error )
//     }
// }


export async function PUT( request , { params }){
    try {
        ConnectMongoDB()
        const data = await request.json()
        const TareaActualizada = await Task.findByIdAndUpdate( params.id  , data ,  {new: true } )
        return NextResponse.json(TareaActualizada)
    } catch (error) {
        return NextResponse.json(error)
    }
   
}


export async function DELETE (request , { params })  {
    ConnectMongoDB()
    try {
        const TareaEliminada = await Task.findByIdAndDelete(params.id)
        if( !TareaEliminada) {
            return NextResponse.json({message : "no se encontro tarea "} , {status : 400})
        } 
        return NextResponse.json( TareaEliminada )
    } catch (error) {
        return NextResponse.json(error)
    }
}