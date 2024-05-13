'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import sliderArrow from '@/public/images/slider-arrow.svg'
import lips1 from '@/public/images/work/3dmodeling/lipsPendant1.jpg'
import lips2 from '@/public/images/work/3dmodeling/lipsPendant2.jpg'
import lips3 from '@/public/images/work/3dmodeling/lipsPendant3.jpg'
import workDatabase from '@app/database/database'
import Link from 'next/link'
import { getCollection } from '@app/utils/getCollection'



export default function page() {
  const params = new useParams();
  const currentCollection = getCollection(params.collection)

  const [description, setDescription] = useState(false);
  const [index, setIndex] = useState(0);

  const filteredDatabase = workDatabase.filter((item) => item.collection.toLowerCase() === currentCollection.toLowerCase())
  const heroImage = workDatabase.filter((item) => item.collection.toLowerCase() === currentCollection.toLowerCase() && item.cover === true);
  const showDescription = () => {
    setDescription(prev=>!prev)
  }

  const nextImage = () => {
    console.log(index)
    setIndex(prevState => prevState+1)
    console.log(index)
  }

  const previousImage = () => {
    console.log(index)
    if(index===0) {
      return
    }
    setIndex(prevState => prevState-1)
  }

  const carousel = `w-screen flex -translate-x-full`

  return (
    <div className='w-full h-screen pt-56 px-16 relative top-0 left-0 bg-zinc-600 flex justify-between bg-black'>
      <div className='w-full flex overflow-hidden'>
        <div className='flex items-center ml-12'>
          <button className='rotate-180 border border-grey-300 rounded-full p-4 hover:bg-zinc-500 z-10'><Image src={sliderArrow} width={30} alt='slider arrow' onClick={previousImage} /></button>
        </div>
        <div className={`w-screen flex -translate-x-[${index*100}%] duration-200 ease-out`}>
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
          {/* <div className='w-full h-full flex justify-center shrink-0'>
            <div className='w-[50%] h-[80%]'>
              <div className='w-full h-full'>
                <h2 className='text-white'>{currentCollection}</h2>
                <div className='bg-white w-full h-px'></div>
                <button className='text-white w-full text-right' onClick={() => {setDescription(prevState => !prevState)}}>{description===true ? '(hide description) ▲' : '(show description) ▼'}</button>
                <div className='mt-4 relative h-full w-full overflow-hidden'>
                  <Image src={lips1} height={400} width={400} alt='lips' className='w-full h-full object-cover'/>
                  <p className={description ? 'absolute left-0 right-0 top-0 bg-white p-12 text-zinc-600 leading-8 antialising duration-700 ease-out' : 'absolute left-0 right-0 top-0 bg-white p-12 text-zinc-600 leading-8 antialising duration-700 -translate-y-full'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra odio et varius vulputate. Pellentesque lobortis finibus eros non ultrices. Nullam felis ligula, pellentesque non pretium fermentum, sollicitudin eget dui. Vivamus diam velit, iaculis a justo eu, gravida elementum diam. Praesent quis tincidunt turpis. Sed non nibh iaculis, egestas erat elementum, semper odio. Morbi semper ultrices sollicitudin.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full flex justify-center shrink-0'>
            <div className='w-[50%] h-[80%]'>
              <div className='w-full h-full'>
                <h2 className='text-white'>{currentCollection}</h2>
                <div className='bg-white w-full h-px'></div>
                <button className='text-white w-full text-right' onClick={() => {setDescription(prevState => !prevState)}}>{description===true ? '(hide description) ▲' : '(show description) ▼'}</button>
                <div className='mt-4 relative h-full w-full overflow-hidden'>
                  <Image src={lips2} height={400} width={400} alt='lips' className='w-full h-full object-cover'/>
                  <p className={description ? 'absolute left-0 right-0 top-0 bg-white p-12 text-zinc-600 leading-8 antialising duration-700 ease-out' : 'absolute left-0 right-0 top-0 bg-white p-12 text-zinc-600 leading-8 antialising duration-700 -translate-y-full'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra odio et varius vulputate. Pellentesque lobortis finibus eros non ultrices. Nullam felis ligula, pellentesque non pretium fermentum, sollicitudin eget dui. Vivamus diam velit, iaculis a justo eu, gravida elementum diam. Praesent quis tincidunt turpis. Sed non nibh iaculis, egestas erat elementum, semper odio. Morbi semper ultrices sollicitudin.</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      <Link href={`/work/${params.category}`} className='px-8 py-2 border border-white text-white rounded-lg absolute top-56 left-16 cursor-pointer transition duration-200 ease-out hover:bg-white hover:text-black'>BACK</Link>
        
        <div className='flex items-center mr-12'>
          <button className='border border-grey-300 rounded-full p-4 hover:bg-zinc-500 z-400'><Image src={sliderArrow} width={30} alt='slider arrow' onClick={nextImage} /></button>
        </div>
      </div>

      <div className='flex items-center'>
        {/* <button className='border border-grey-300 rounded-full p-4 hover:bg-zinc-500'><Image src={sliderArrow} width={30} alt='slider arrow' /></button> */}
      </div>
    </div>
  )
}
