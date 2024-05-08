import { Suspense } from 'react'
import Grid from '@/app/components/Grid'


function Category() {
  return (
    <div className='relative pt-44 pb-20 z-auto'>
      <Suspense fallback='loading'>
        <Grid />
      </Suspense>
    </div>
  )
}

export default Category
