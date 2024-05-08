'use client'

import { cloneElement } from 'react'
import Slide from './Slide'
import Carousel from './Carousel'
import workDatabase from '@app/database/database'

function WorkPopup({ isWorkPopupOpen, setIsWorkPopupOpen, collection }) {
  console.log(collection)
  return (
    <div className={isWorkPopupOpen ? 'workpopup_active' : 'workpopup'}>
      <button className='text-white mt-8 text-xl font-medium p-1 w-10 h-10 rounded-full border border-white' onClick={() => {setIsWorkPopupOpen(false)}}>X</button>
      <div className='flex gap-2'>
        {collection.map((item) => {
          return (<Carousel key={item.id} item={item} />)
        })}
      </div>
      <div className='flex w-full overflow-x-auto'>
        {collection.map((item) => {
          return (
            <Slide key={item.id} item={item} />
          )
        })}
      </div>
      
      
      {/* <div className='flex justify-start w-[100vw] overflow-x-auto'>
        {collection.map((item) => 
          (<div key={item.id} className='flex flex-col items-center w-[100vw]'>
            <h2 className='text-white text-3xl text-center pt-8'>{item.collection}</h2>
            <Image src={item.link} alt={item.description} width={1000} height={600} className='mt-4 w-[40vw] max-h-[60vh] object-cover'/> )
            <p className='text-white text-center'>{item.description}</p>
          </div>
          )
        )}
      </div> */}
    </div>
  )
}

export default WorkPopup

{/* <button className='absolute top-5 left-[50%] text-white text-xl font-medium p-1 w-10 h-10 rounded-full border border-white' onClick={() => {setIsWorkPopupOpen(false)}}>X</button>
<h2 className='text-white text-3xl text-center'>Title</h2>
<p className='text-white text-center'>Digital creation of three-dimensional objects.</p>
<div className="wrapper flex gap-20 overflow-x-auto">
  <Image key={item.id} src={item.link} alt={item.description} width={1000} height={600} className='w-[100vw] object-cover'/> )
</div> */}