'use client'
import { useParams } from 'next/navigation'

import WorkNav from '../../components/WorkNav'
import Grid from '../../components/Grid'
import { Suspense } from 'react'

function Category() {
  const {category} = useParams()
  return (
    <div className='relative pt-20 pb-20'>
      <WorkNav filter={category}/>
      <Suspense fallback='loading'>
        <Grid filter={category} />
      </Suspense>
    </div>
  )
}

export default Category
