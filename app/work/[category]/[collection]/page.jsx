'use client'

import Carousel from '@app/components/Carousel'
import Image from 'next/image'
import { redirect, useParams, useRouter } from 'next/navigation'
import workDatabase from '@/app/database/database'



function Collection() {
  const params = useParams();
  const router = useRouter();

  const filteredCollection = workDatabase.filter((artwork) => artwork.collection.replace(/\s/g, '').toLowerCase()=== params.collection)

  return (
    <div className='workpopup_active'>
      <button className='text-white mt-8 text-xl font-medium px-4 py-2 rounded-full border border-white' onClick={() => {router.push(`/work/${params.category}`)}}>BACK</button>
      <h1 className='mt-4 text-2xl text-white'>{params.collection}</h1>
      <div className='flex mt-4 w-[80vw] justify-center gap-3'>
        {filteredCollection.map((item) => {
          return (<Carousel key={item.id} id={item.id} item={item} />)
        })}
      </div>
      <div className='flex mt-8 w-[80%] overflow-x-auto gap-10'>
        {filteredCollection.map((item) => {
          return <Image src={item.link} key={item.id} item={item} id={item.id} alt={item.description} width={600} height={600} />})
        }
        </div>
    </div>
  )
}

export default Collection
