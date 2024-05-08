import WorkNav from '@app/components/WorkNav'

function Layout({ children }) {
  return (
    <>
      <WorkNav />
      {children}
    </>
  )
}

export default Layout
