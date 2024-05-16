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
    <div className='flex max-w-[1024px] w-[95%] md:w-[90%] lg:w-[80%] items-center justify-between mx-auto mt-24 border border-zinc-400 rounded-3xl overflow-hidden'>
      <nav className='flex flex-col gap-8 w-1/2'>
        {filteredWork.map((item) => {
          const collectionAsUrl = item.collection.replace(/\s/g, '').toLowerCase()
          return (
            <div key={item.id} className='flex flex-col items-center'>
              <Link href={`/work/${category}/${collectionAsUrl}`} className='work__collection-link relative text-xl text-center' onMouseEnter={() => {changeImageUrl(item.link)}}>{item.collection}</Link>
            </div>
          )
        })}
      </nav>
          <Image src={collectionThumb} height={500} width={500} alt='thumbnail' className='w-[400] aspect-square object-cover'/>
    </div>
  )
}

export default Grid
