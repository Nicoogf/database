import { NextResponse } from "next/server";
import { MongoConnect } from "../../../../utils/mongoose"
import User from "../../../../models/Usuario"

export async function GET ( request , {params}){
    MongoConnect()
    const UsuarioEncontrado = await User.findById( params.id )

    return NextResponse.json(UsuarioEncontrado)
}

export async function PUT ( request , {params}) {
    MongoConnect()
    const data = await request.json()
    const UsuarioEncontrado = await User.findByIdAndUpdate( params.id, data ,  {new : true} )
    return NextResponse.json(UsuarioEncontrado)
}

export async function DELETE (request , {params})  {
    MongoConnect()
    const usuarioEliminado = await User.findByIdAndDelete( params.id )
    return NextResponse.json(usuarioEliminado)
}