import React from 'react'

function poster(props) {
  return (
    <>
    <main className="fixed top-0 -z-10 h-screen w-full" >
        <div className="h-screen w-full">
            <img src={props.poster} alt="Avengerposterimg" className='h-screen w-full overflow-hidden object-cover object-top brightness-35' />
        </div>
    </main>
    </>
  )
}

export default poster