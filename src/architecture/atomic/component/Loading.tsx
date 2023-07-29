import React from 'react'

const Loading = ({menssage}:{menssage:string}) => {
  
  return (
    <div className='absolute top-0 z-10 w-full h-[100vh] bg-light-white-100 flexCenter'>
      <div>
        <p className='text-gray-100 font-semibold text-base'>Cargando...</p>
        <h6> {menssage} </h6>
      </div>
    </div>
  )
}

export { Loading }
