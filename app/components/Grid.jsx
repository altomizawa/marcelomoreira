import Link from 'next/link'
import Image from 'next/image'

import workDatabase from '../database/database'

function Grid() {
  return (
    <div className='flex w-full flex-wrap mx-auto my-20 justify-center'>
      {workDatabase.map((item) => (
        <div className='relative' key={item.id}>
          <Image src={item.link} alt={item.alt} width={300} height={300} className='w-[300px] h-[300px] object-fit'></Image>
          <div className='duration-200 hover:opacity-80 absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center cursor-pointer'>
            <p className='text-white uppercase'>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Grid
