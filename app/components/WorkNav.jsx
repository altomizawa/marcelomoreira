'use client'

import { useEffect, useState, useContext } from 'react'
import { useParams } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

import artwork from '../../public/images/work/artwork.svg'
import restoration from '../../public/images/work/restoration.svg'
import carving from '../../public/images/work/carving.svg'
import design from '../../public/images/work/design.svg'
import movies from '../../public/images/work/movies.svg'
import modeling from '../../public/images/work/3d.svg'
import jewelry from '../../public/images/work/3d.svg'
import miscellaneous from '../../public/images/work/miscellaneous.svg'

import { CategoryContext } from '../contexts/categoryContext'

function WorkNav() {
  const params = useParams();
  const filter = params.category;

  const [iconHoverStatus, setIconHoverStatus] = useState(false)

  return (
    <nav className='fixed top-0 left-0 pt-24 pb-4 mx-auto flex justify-left lg:justify-center px-10 gap-8 w-full overflow-x-auto bg-white z-10'>
      <Link href='/work/artwork' className={filter==='artwork' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}> 
        <Image src={artwork} alt='artwork icon' width={40} height={40} className={filter==='artwork' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text' alt='artwork icon'>artwork</p>
      </Link>
      <Link href='/work/restoration' className={filter==='restoration' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}>
        <Image src={restoration} alt='restoration icon' width={40} height={40} className={filter==='restoration' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text'>restoration</p>
      </Link>
      <Link href='/work/carving' className={filter==='carving' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}>
        <Image src={carving} alt='wood carving icon' width={40} height={40} className={filter==='carving' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text'>carving</p>
      </Link>
      <Link href='/work/design' className={filter==='design' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}>
        <Image src={design} alt='craft & design icon' width={40} height={40} className={filter==='design' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text'>craft & design</p>
      </Link>
      <Link href='/work/movies' className={filter==='movies' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}>
        <Image src={movies} alt='movies icon' width={40} height={40} className={filter==='movies' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text'>movies</p>
      </Link>
      <Link href='/work/modeling' className={filter==='modeling' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}>
        <Image src={modeling} alt='3d modeling icon' width={40} height={40} className={filter==='modeling' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text'>3d modeling</p>
      </Link>
      <Link href='/work/jewelry' className={filter==='jewelry' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}>
        <Image src={jewelry} alt='jewelry making icon' width={40} height={40} className={filter==='jewelry' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text'>jewelry making</p>
      </Link>
      <Link href='/work/miscellaneous' className={filter==='miscellaneous' ? 'work__link-wrapper work__link-wrapper_active' : 'work__link-wrapper'}>
        <Image src={miscellaneous} alt='miscellaneous icon' width={40} height={40} className={filter==='miscellaneous' ? 'work__link work__link_active' : 'work__link'} />  
        <p className='work__link-text'>miscellaneous</p>
      </Link>
    </nav>
  )
}

export default WorkNav
