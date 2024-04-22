'use client'
import React from 'react'
import { useState , useEffect} from 'react'
import { useRouter , useParams} from 'next/navigation'

const FormUser = () => { 

    const router = useRouter()
    const params = useParams()
    const [ usuarioNuevo , setUsuarioNuevo ] = useState({nombre: "" , email: ""})

   
    const CreateUser = async() =>  {
        try {
            const Respuesta = await fetch("/api/usuarios" , {
                method:"POST" , 
                body: JSON.stringify(usuarioNuevo),
                headers: {
                 "Content-Type" : "application/json"
                }             
            })
            const data = await Respuesta.json()
            console.log(data)

            if(Respuesta.status === 200) {
            router.push("/")
            router.refresh()
            }

        } catch (error) {
            console.log(error)
        }
        
       
        
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault()        
        await CreateUser()
           
    }

    const handleChange = ( e ) => {   
       const campoModificado =  e.target.name  
       setUsuarioNuevo( {...usuarioNuevo , [campoModificado] : e.target.value} )
    }

     useEffect( () => {
        console.log(params)
    } , [] )

    const handleDelete = async() => {
        try {
            if (window.confirm(`Quieres eliminar el usuario ${params.id}`)) {
                const res = await fetch(`/api/usuarios/${params.id}`,{
                    method: "DELETE"
                })
                router.push("/")
                router.refresh()
              }
        } catch (error) {
            console.log(error)
        }
      
    } 

  return (
    <div className='container mx-auto'>
        <header className='flex flex-row items-center gap-x-2 justify-center my-4'>
            <h2> { params.id ? "Editar tarea" : "Crear Tarea" } </h2>
            <button type="button" onClick={ handleDelete } className='bg-red-500 text-white p-2 rounded-lg'> Eliminar </button>
        </header>
      
        <form className='bg-gray-700 flex flex-col gap-2 max-w-[500px] mx-auto text-black' onSubmit={handleSubmit}>
            <input className='p-2' name="nombre" placeholder='Ingresar nombre' onChange={handleChange}/> 
            <input className='p-2' name="email" placeholder='Ingresar email' onChange={handleChange}/>  
            <button type="submit" className='bg-blue-500 p-2 rounded-lg text-white'> Agregar </button>           
        </form>
    </div>
  )
}

export default FormUser