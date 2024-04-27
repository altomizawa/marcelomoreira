'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import menuIcon from '../../public/images/menu_icon.svg'
import menuIconWhite from '../../public/images/menu_icon_white.svg'
import WorkNav from './WorkNav'
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWorkNavOpen, setIsWorkNavOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(prev=>!prev)
  }
  return (
    <>
      <div className={isWorkNavOpen ? 'w-full fixed top-0 left-0 z-10 pt-10 bg-white' : 'w-full fixed top-0 left-0 z-20 pt-10'}>
        <nav className='justify-center hidden md:flex'>
          <Link className='nav__link nav__link_left' onClick={()=>setIsWorkNavOpen(false)} href={'/'}>ABOUT ME</Link>
          <Link className='nav__link' href={'/work/artwork'} onClick={()=>setIsWorkNavOpen(true)}>WORK</Link>
          <Link className='nav__link nav__link_right' onClick={()=>setIsWorkNavOpen(false)} href={'/'}>CONTACT</Link>
        </nav>
      </div>


      {/* MOBILE NAVIGATION */}
      <div className='w-full fixed top-0 left-0 z-10'>
        <nav className='relative mt-0 md:hidden'>
          <Image alt='menu_icon' src={isMenuOpen ? menuIconWhite : menuIcon} className={isMenuOpen ? 'menu-icon' : 'menu-icon menu-icon_inactive'} width={40} onClick={handleMenu}/>
          <div className={isMenuOpen ? 'mobile-nav' : 'mobile-nav mobile-nav_inactive'}>
            <Link className='mobile-nav__link mobile-nav__link_top' href={'/'} onClick={()=>{
              setIsMenuOpen(false)
              setIsWorkNavOpen(false)
            }}>ABOUT ME</Link>
            <Link className='mobile-nav__link' href='/work/artwork' onClick={()=>{
              setIsMenuOpen(false)
              setIsWorkNavOpen(true)
            }}>WORK</Link>
            <Link className='mobile-nav__link mobile-nav__link_bottom' href={'/'} onClick={()=>{
              setIsMenuOpen(false)
              setIsWorkNavOpen(false)
            }}>CONTACT</Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav
