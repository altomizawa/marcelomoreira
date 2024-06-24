'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import sliderArrow from '@/public/images/slider-arrow.svg'
import lips1 from '@/public/images/work/3dmodeling/lipsPendant1.jpg'
import lips2 from '@/public/images/work/3dmodeling/lipsPendant2.jpg'
import lips3 from '@/public/images/work/3dmodeling/lipsPendant3.jpg'
import workDatabase from '@app/database/database'
import Link from 'next/link'
import { getCollection } from '@app/utils/getCollection'



export default function Collection() {
  const params = new useParams();
  const currentCollection = getCollection(params.collection)

  const [description, setDescription] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const filteredDatabase = workDatabase.filter((item) => item.collection.toLowerCase() === currentCollection.toLowerCase())
  const heroImage = workDatabase.filter((item) => item.collection.toLowerCase() === currentCollection.toLowerCase() && item.cover === true);
  const showDescription = () => {
    setDescription(prev=>!prev)
  }

  const previousImage = () => {
    if (imageIndex===0) {
      console.log('index:', imageIndex)
      return filteredDatabase.length-1
    }
    console.log('index: ', imageIndex)
    return imageIndex - 1
  }

  const nextImage = () => {
    if ((imageIndex-1) === filteredDatabase.length) {
      console.log('index: ', imageIndex)
      return 0
    }
    console.log('index: ', imageIndex)
    return imageIndex + 1
  }


  


  return (
    <div className='w-screen h-screen pt-56 px-16 relative top-0 left-0 bg-zinc-600 flex bg-black'>
      <div className='w-full flex items-center'>
        <button className={filteredDatabase.length !== 1 ? 'rotate-180 border border-grey-300 rounded-full p-4 hover:bg-zinc-500 z-10 shrink-0': 'hidden'}><Image src={sliderArrow} width={30} alt='slider arrow' onClick={() => {setImageIndex(previousImage)}} /></button>
        <div className={`w-full flex translate-x-[${-100*imageIndex}%] duration-200 z-0`}>
          {filteredDatabase.map((item) => {
            return(
              <>
              <div className='w-full h-full flex justify-center shrink-0'>
              <div className='w-[50%] h-[80%]'>
                <div className='w-full h-full'>
                  <h2 className='text-white'>{item.collection}</h2>
                  <div className='bg-white w-full h-px'></div>
                  <button className='text-white w-full text-right' onClick={() => {setDescription(prevState => !prevState)}}>{description===true ? '(hide description) ▲' : '(show description) ▼'}</button>
                  <div className='mt-4 relative h-full w-full overflow-hidden'>
                    <Image src={item.link} height={400} width={400} alt={item.alt} className='w-full h-full object-cover'/>
                    <p className={description ? 'absolute left-0 right-0 top-0 bg-white p-12 text-zinc-600 leading-8 antialising duration-700 ease-out' : 'absolute left-0 right-0 top-0 bg-white p-12 text-zinc-600 leading-8 antialising duration-700 -translate-y-full'} >{item.alt}</p>
                  </div>
                </div>
              </div>
            </div>
              </>
            )
          })}
        </div>
        <button className={filteredDatabase.length !== 1 ? 'border border-grey-300 rounded-full p-4 hover:bg-zinc-500 z-10 shrink-0': 'disabled'}><Image src={sliderArrow} width={30} alt='slider arrow' onClick={() => {setImageIndex(nextImage)}} /></button>
      <Link href={`/work/${params.category}`} className='px-8 py-2 border border-white text-white rounded-lg absolute top-56 left-16 cursor-pointer transition duration-200 ease-out hover:bg-white hover:text-black'>BACK</Link>
      </div>
    </div>
  )
}
