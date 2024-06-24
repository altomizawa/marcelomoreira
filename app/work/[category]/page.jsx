import { Suspense } from 'react'
import Grid from '@/app/components/Grid'


function Category() {
  return (
    <div className='relative h-screen pt-60 z-auto'>
      <Suspense fallback='loading'>
        <Grid />
      </Suspense>
    </div>
  )
}

export default Category
