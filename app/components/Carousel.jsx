import Image from 'next/image'

function Carousel(props) {
  console.log(props.item)
  return (
    <>
      <Image src={props.item.link} alt={props.item.alt} width={80} height={80} className='mt-4 border border-gray-800 rounded-xl'/>    
    </>

  )
}

export default Carousel
