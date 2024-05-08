import Image from 'next/image'
import blackwhite3 from '@/public/images/work/artwork/black&white/blackwhite1-1000x1000.jpg'

function Slide({ item }) {
  return (
    <div>
      <div className='flex flex-col'>
        <h2 className='text-white text-3xl text-center mt-4'>{item.collection}</h2>
        <p className='text-white text-lg text-center mt-2'>{item.description}</p>
      </div>
      <div className='flex'>
        <div className='flex justify-center items-center w-[100vw] h-[60vh] px-4'>
          <Image  src={item.link} alt='black and white paint of Cyntia' width={600} height={600} className='max-h-[600px] aspect-square border border-white' />
        </div>
      </div>
    </div>
  )
}

export default Slide
