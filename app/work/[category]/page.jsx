'use client'
import { Suspense } from 'react'
import { useParams } from 'next/navigation'
import Grid from '@/app/components/Grid'


function Category() {
  const { category } = useParams();
  return (
    <div className='relative pt-44 pb-20 z-auto'>
      <Suspense fallback='loading'>
        <Grid filter={category} />
      </Suspense>
    </div>
  )
}

export default Category
