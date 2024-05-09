import Image from 'next/image'

function Carousel(props) {
  return (
    <>
      <a href={`#${props.item.id}`} className='min-h-content cursor-pointer'>
        <Image src={props.item.link} alt={props.item.alt} id={props.item.id} width={80} height={80} className='border border-gray-800 rounded-xl' />
      </a>    
    </>

  )
}

export default Carousel
