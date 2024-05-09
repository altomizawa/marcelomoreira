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
    <div className='flex justify-between items-center px-24 mt-24'>
      <nav className='flex flex-col gap-8'>
        {filteredWork.map((item) => {
          return (
            <div key={item.id}>
              <Link href={item.link} className='work__collection-link relative text-2xl' onMouseEnter={() => {changeImageUrl(item.link)}}>{item.collection}</Link>
            </div>
          )
        })}
      </nav>
        <div className='bg-zinc-400 flex justify-center items-center p-12 rounded-lg'>
          <Image src={collectionThumb} height={600} width={600} alt='thumbnail' className='w-[400px] h-[400px]'/>
        </div>
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
