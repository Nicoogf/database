
import { NextResponse } from "next/server";
import { ConnectMongoDB } from "@/app/utils/mongoose";
import Task from "@/app/models/Task";


export async function GET() {
    ConnectMongoDB()
    const listadoDeTaras = await Task.find()
    return NextResponse.json( listadoDeTaras  )
}



export async function POST ( request ) {
    try {
    ConnectMongoDB()
    const data = await request.json()
    const newTask = new Task(data)
    const saveTask = await newTask.save()

    return NextResponse.json(saveTask)
    } catch (error) {
        return NextResponse.json(error)
    }
    
}