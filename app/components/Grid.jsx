'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import WorkPopup from './WorkPopup'
import workDatabase from '../database/database'

function Grid() {
  const router = useRouter()
  const { category } = useParams();

  const filteredWork = workDatabase.filter((work) => work.category===category && work.cover===true)
  const [isWorkPopupOpen, setIsWorkPopupOpen] = useState(false)
  const [collection, setCollection] =  useState([])
  const [collectionThumb, setCollectionThumb] = useState('' | null)

  const handleWorkClick = ({collection}) =>{
    const collectionAsUrl = collection.replace(/\s/g, '').toLowerCase()
    console.log(collectionAsUrl)

    router.push(`/work/${category}/${collectionAsUrl}`)
  }

  const changeImageUrl = (link) =>{
    setCollectionThumb(link)
  }

  return (
    <div className='flex w-[100%] md:w-[80%] items-center mx-auto mt-24 border border-zinc-800 rounded-3xl overflow-hidden'>
      <nav className='flex flex-col gap-8 w-1/2'>
        {filteredWork.map((item) => {
          return (
            <div key={item.id} className='flex flex-col items-center'>
              <Link href={item.link} className='work__collection-link relative text-xl text-center' onMouseEnter={() => {changeImageUrl(item.link)}}>{item.collection}</Link>
            </div>
          )
        })}
      </nav>
          <Image src={collectionThumb} height={500} width={500} alt='thumbnail' className='w-1\2 min-h-[500px] object-cover '/>
    </div>
    // <div className='mt-16 flex w-full flex-wrap justify-center relative gap-1'>
    //   {filteredWork.map((item) => (
    //     <div className='relative' key={item.id} onClick={() => {handleWorkClick(item)}}>
    //       <Image src={item.link} alt={item.alt} width={300} height={300} className='w-[80vw] aspect-square md:w-[300px] object-cover'></Image>
    //       <div className='duration-200 hover:opacity-80 absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center cursor-pointer'>
    //         <p className='text-white uppercase'>{item.collection}</p>
    //       </div>
    //     </div>
    //   ))}
    //   <WorkPopup isWorkPopupOpen={isWorkPopupOpen} setIsWorkPopupOpen={setIsWorkPopupOpen} collection={collection} />
    // </div>
  )
}

export default Grid
