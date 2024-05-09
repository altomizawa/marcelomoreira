import Link from 'next/link'

function NotFound() {
  return (
    <>
      <div className='h-screen w-screen bg-white text-black flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl'>Content not found</h1>
        <Link href='/' className='bg-black text-white font-lg px-4 py-2 rounded-full'>Back to home</Link>
      </div>
    </>
  )
}

export default NotFound
