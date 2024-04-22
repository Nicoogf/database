
import React from 'react'
import { MongoConnect } from '../../utils/mongoose'
import User from "../../models/Usuario"
import UserCard from "../components/UserCard"


async function LoadTask () {
  MongoConnect()
  const Users = await User.find()
  return Users
}


async function Listado  () {

  const ListadoDeUsuarios  = await LoadTask()
  return (
    <div className='flex flex-col gap-4'>
    
    { ListadoDeUsuarios.map( usuario => (
      <UserCard usuario={usuario} key={usuario._id}/>
    ))}
    </div>
  )
}

export default Listado