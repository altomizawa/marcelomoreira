'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import WorkPopup from './WorkPopup'
import workDatabase from '../database/database'

function Grid() {
  const { category } = useParams();

  const filteredWork = workDatabase.filter((work) => work.category===category && work.cover===true)
  const [isWorkPopupOpen, setIsWorkPopupOpen] = useState(false)
  const [collection, setCollection] =  useState([])

  const handleWorkClick = ({collection}) =>{
    const filteredCollection = workDatabase.filter((item) => item.collection === collection)
    setIsWorkPopupOpen(true)
    setCollection(filteredCollection)
  }

  return (
    <div className='mt-16 flex w-full flex-wrap justify-center relative gap-1'>
      {filteredWork.map((item) => (
        <div className='relative' key={item.id} onClick={() => {handleWorkClick(item)}}>
          <Image src={item.link} alt={item.alt} width={300} height={300} className='w-[80vw] aspect-square md:w-[300px] object-cover'></Image>
          <div className='duration-200 hover:opacity-80 absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center cursor-pointer'>
            <p className='text-white uppercase'>{item.collection}</p>
          </div>
        </div>
      ))}
      <WorkPopup isWorkPopupOpen={isWorkPopupOpen} setIsWorkPopupOpen={setIsWorkPopupOpen} collection={collection} />
    </div>
  )
}

export default Grid
