import Link from 'next/link'
import React from 'react'

const UserCard = ( {usuario} ) => {
  return (
    <Link href={`/user/${usuario._id}`}>
      <div className='bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-all duration-200 cursor-pointer'>
          <h3> {usuario.nombre} </h3>
          <h4> {usuario.email } </h4>

        </div>
     </Link>
  )
}

export default UserCard