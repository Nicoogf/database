import React from 'react'
import { ConnectMongoDB } from '../utils/mongoose'
import Task from '../models/Task'

async function GetProducts () {
    ConnectMongoDB()
    const listado =  await Task.find()
    return listado
}

async function Listado() {
  const listado =  await GetProducts()   
  return (
    <div className='flex flex-col'> 

        { listado.map( tarea => (
            <article key={tarea._id} className='bg-gray-700 p-2 flex flex-row gap-x-3'> 
                <h2> {tarea.title} </h2>
                <h2> {tarea.description} </h2>
            </article>
       ))}
    </div>
  )
}

export default Listado