import { cloneElement } from 'react'
import Slide from './Slide'
import Carousel from './Carousel'
import workDatabase from '@app/database/database'
import Image from 'next/image'

function WorkPopup({ isWorkPopupOpen, setIsWorkPopupOpen, collection }) {
  return (
    <div className={isWorkPopupOpen ? 'workpopup_active' : 'workpopup'}>
      <button className='text-white mt-8 text-xl font-medium p-1 w-10 h-10 rounded-full border border-white' onClick={() => {setIsWorkPopupOpen(false)}}>X</button>
      <h1>title</h1>
      <div className='flex w-[80vw] justify-center gap-3 border border-white'>
        {collection.map((item) => {
          return (<Carousel key={item.id} id={item.id} item={item} />)
        })}
      </div>
      <div className='flex w=[80%] overflow-x-auto gap-10'>
        {collection.map((item) => {
          return <Image src={item.link} key={item.id} item={item} id={item.id} alt={item.description} width={600} height={600} />})
        }
        </div>
    </div>
  )
}

export default WorkPopup