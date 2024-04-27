'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

import workDatabase from '../database/database'

function Grid({filter}) {
  const filteredWork = workDatabase.filter((category) => category.category===filter)
  return (
    <div className='mt-6 flex w-full flex-wrap justify-center'>
      {filteredWork.map((item) => (
        <div className='relative' key={item.id}>
          <Image src={item.link} alt={item.alt} width={300} height={300} className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-fit'></Image>
          <div className='duration-200 hover:opacity-80 absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center cursor-pointer'>
            <p className='text-white uppercase'>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Grid
