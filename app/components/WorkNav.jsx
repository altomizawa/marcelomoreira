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

function WorkNav() {
  return (
    <div>
      <nav className='flex justify-left px-10 gap-8 mt-[8rem] overflow-x-scroll'>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={artwork} alt='artwork icon' width={40} height={40} className='m-auto' />  
          <Link href='/' alt='artwork icon'>artwork</Link>
        </div>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={restoration} alt='restoration icon' width={40} height={40} className='m-auto' />  
          <Link href='/'>restoration</Link>
        </div>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={carving} alt='wood carving icon' width={40} height={40} className='m-auto' />  
          <Link href='/'>carving</Link>
        </div>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={design} alt='craft & design icon' width={40} height={40} className='m-auto' />  
          <Link href='/' className='text-center'>craft & design</Link>
        </div>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={movies} alt='movies icon' width={40} height={40} className='m-auto' />  
          <Link href='/'>movies</Link>
        </div>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={modeling} alt='3d modeling icon' width={40} height={40} className='m-auto' />  
          <Link href='/' className='text-center'>3d modeling</Link>
        </div>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={jewelry} alt='jewelry making icon' width={40} height={40} className='m-auto' />  
          <Link href='/'>jewelry making</Link>
        </div>
        <div className='cursor-pointer hover:border border-black rounded-lg p-3'>
          <Image src={miscellaneous} alt='miscellaneous icon' width={40} height={40} className='m-auto' />  
          <Link href='/'>miscellaneous</Link>
        </div>
      </nav>
    </div>
  )
}

export default WorkNav
