'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import WorkPopup from './WorkPopup'
import workDatabase from '../database/database'

function Grid() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()
  const { category } = useParams();

  const filteredWork = workDatabase.filter((work) => work.category===category && work.cover===true)
  const handleWorkClick = ({collection}) =>{
    const collectionAsUrl = collection.replace(/\s/g, '').toLowerCase()
    console.log(collectionAsUrl)

    router.push(`/work/${category}/${collectionAsUrl}`)
  }

  const handleNavigationClick = (e) => {
    if (e.target.name === 'previous') {
      setCurrentImageIndex( currentImageIndex===0 ? filteredWork.length-1 : currentImageIndex - 1 )
    }
    if (e.target.name === 'next') {
      setCurrentImageIndex(currentImageIndex===filteredWork.length-1 ? 0 : currentImageIndex + 1 )
    }

  }

  return (
    <div className='w-screen h-full bg-gray-800 relative z-0 flex flex-col justify-center items-center text-[6rem] font-bold'>
      <h2 className='text-white text-8xl text-center'>{filteredWork[currentImageIndex].collection.toUpperCase()}</h2>
      <div className='flex gap-2 mt-12'>
        <button onClick={handleNavigationClick} name='previous' className='text-xl border border-white px-4 py-2 bg-white'>PREV</button>
        <button onClick={handleNavigationClick} name='next' className='text-xl border border-white px-4 py-2 bg-white'>NEXT</button>
      </div>
      <p className='text-lg text-white mt-8'> {currentImageIndex+1} / {filteredWork.length}</p>
      <div className='absolute top-0 left-0 w-full h-full -z-10 flex overflow-hidden'>
        {filteredWork.map((work) => {
          return (
              <Image key={work.collection} src={work.link.src} width={1280} height={900} alt='cover artwork' className='w-full h-full object-cover opacity-60 shrink-0 translate-x-[-100%] duration-500' style={{transform: `translateX(-${currentImageIndex*100}%)`}} />
          )
        })

        }
      </div>
    </div>
  )
}

export default Grid
