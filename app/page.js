import Image from "next/image";
import marceloRestoring from '../public/images/marcelo-restoring.png'
import treeRings from '../public/images/tree-rings_cover.jpg'

export default function Home() {
  return (
    <main>
      <div className='h-[100vh] flex flex-col items-center justify-center items-center relative'>
        <Image src={treeRings} width={600} height={768} alt='tree rings' className='w-screen h-screen object-cover absolute object-left-top z-auto'/> 
        <h2 className='w-full text-[9vw] 2xl:text-[9rem] font-bold text-white text-center z-10'>MARCELO MOREIRA</h2>
        <h2 className='w-full text-[4vw] 2xl:text-[4rem] font-light tracking-[4vw] 2xl:tracking-[4rem] text-center text-white translate-x-2 sm:translate-x-5'>CREATIVE ARTIST</h2>
      </div>
      <section className='flex flex-col justify-between md:flex-row bg-white h-screen md:items-center md:pl-20 md:gap-20'>
        <h2 className='home__quote'>
          I believe that the search for self-development
          is reached by experiencing different paths in life.
          Art is one of them for me.</h2>
        <Image src={marceloRestoring} alt='marcelo restoring ceiling' width={900} height={300} className='h-[50vh] md:h-screen w-full md:w-[35vw] object-cover border border-black'></Image>
      </section>
    </main>
  );
}
