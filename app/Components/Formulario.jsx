'use client'
import React, { useState , ChangeEvent } from 'react'
import { ConnectMongoDB } from '../utils/mongoose'



const Formulario = () => {


const [ newTask , setNewTask] =  useState({title : "" , description : ""})

const createTASK = async() => {
    ConnectMongoDB() 
    const res = await fetch("/api/task",{
    method: "POST" ,
    body : JSON.stringify( newTask ),
    headers: {
      "Content-Type" : "application/json"
    }
  })
  const data = await res.json()
  console.log(data)
}

const handleSubmit = async (e) => {
  ConnectMongoDB()
  e.preventDefault()
  await createTASK() 
  
}
 
 const handleChage = ( e ) => {
     const campoModificado = e.target.name;
     const valorDeCampo = e.target.value;

     setNewTask({...newTask ,
                [campoModificado] : valorDeCampo}
              )
 }

  return (
    <div className='h-[15vh] flex'>
        <form className='flex flex-col gap-2'  onSubmit={handleSubmit}>
            <input type="text" className='bg-gray-300 text-black font-semibold' onChange={handleChage} name='title'/>
            <input type="text" className='bg-gray-300 text-black font-semibold' onChange={handleChage} name='description'/>
            <button className='w-full bg-blue-500 py-2 rounded-lg'> Agregar </button>
        </form>

    </div>
  )
}

export default Formulario