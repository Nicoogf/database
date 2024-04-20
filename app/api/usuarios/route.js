import { NextResponse } from "next/server";
import { MongoConnect } from "../../../utils/mongoose";
import User from "../../../models/Usuario"

export async function GET() {
    MongoConnect()
    const data = await User.find()
    return NextResponse.json( data )
}

export async function POST ( request ) {
    MongoConnect() 
    const data = await request.json()
    const newUser = new User(data)
    const UserSaved = await newUser.save()

    return NextResponse.json( {UserSaved} )
}