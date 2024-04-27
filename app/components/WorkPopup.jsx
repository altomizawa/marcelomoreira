'use client'
import Image from 'next/image'

import workDatabase from '@app/database/database'

function WorkPopup({ isWorkPopupOpen, setIsWorkPopupOpen, collection }) {

  console.log(collection)
  return (
    <div className={isWorkPopupOpen ? 'workpopup_active' : 'workpopup'}>
      <button className='absolute top-5 left-[50%] text-white text-xl font-medium p-1 w-10 h-10 rounded-full border border-white' onClick={() => {setIsWorkPopupOpen(false)}}>X</button>
      <h2 className='text-white text-3xl text-center'>Title</h2>
      <p className='text-white text-center'>Digital creation of three-dimensional objects.</p>
      <div className="wrapper flex gap-20 overflow-x-auto">
        {collection.map((item) => <Image key={item.id} src={item.link} alt={item.description} width={1000} height={600} className='w-[100vw] object-cover'/> )}
      </div>
    </div>
  )
}

export default WorkPopup
