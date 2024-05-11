'use client'

import { useState } from 'react'
import Image from 'next/image'
import sliderArrow from '@/public/images/slider-arrow.svg'
import lips1 from '@/public/images/work/3dmodeling/lipsPendant1.jpg'


export default function page() {
  const [description, setDescription] = useState(false);

  const showDescription = () => {
    setDescription(prev=>!prev)
    console.log(description)
  }


  return (
    <div className='w-full h-screen px-16 relative pt-[200px] top-0 left-0 bg-zinc-600 flex justify-between'>
      <button className='px-8 py-2 border border-white text-white rounded-lg absolute top-56 left-16 cursor-pointer transition duration-200 ease-out hover:bg-white hover:text-black'>BACK</button>
      <div className='flex items-center'>
        <button className='rotate-180 border border-grey-300 rounded-full p-4 hover:bg-zinc-500'><Image src={sliderArrow} width={30} alt='slider arrow' /></button>
      </div>
      <div className='flex flex-col items-center relative'>
        <p className='w-full text-white font-medium mt-8'>Lips</p>
        <div className='h-[1px] w-full bg-white mt-4'></div>
        <button className='w-full text-right text-white my-2 text-sm' onClick={showDescription}>(item description) ▼</button>
        <div className='w-[600px] relative'>
          <Image src={lips1} width={600} height={600} alt='lips collection item 1' className='absolute top-0 left-0'>
          </Image>
          <div className='bg-gray-300 absolute w-full'>
            <p className={description ? 'text-zinc-800 leading-8 p-8 antialiased h-full' : 'text-zinc-800 leading-8 p-0 antialiased h-0 overflow-hidden'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra odio et varius vulputate. Pellentesque lobortis finibus eros non ultrices. Nullam felis ligula, pellentesque non pretium fermentum, sollicitudin eget dui. Vivamus diam velit, iaculis a justo eu, gravida elementum diam. Praesent quis tincidunt turpis. Sed non nibh iaculis, egestas erat elementum, semper odio. Morbi semper ultrices sollicitudin.
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <button className='border border-grey-300 rounded-full p-4 hover:bg-zinc-500'><Image src={sliderArrow} width={30} alt='slider arrow' /></button>
      </div>
    </div>
  )
}
