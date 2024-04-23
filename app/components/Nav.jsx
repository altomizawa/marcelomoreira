'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import menuIcon from '../../public/images/menu_icon.svg'
import menuIconWhite from '../../public/images/menu_icon_white.svg'
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(prev=>!prev)
  }
  return (
    <>
      <nav className='justify-center hidden md:flex fixed top-8 left-0 right-0 m-auto z-10'>
        <Link className='nav__link nav__link_left' href={'/'}>ABOUT ME</Link>
        <Link className='nav__link' href={'/work'}>WORK</Link>
        <Link className='nav__link nav__link_right' href={'/'}>CONTACT</Link>
      </nav>
      {/* MOBILE NAVIGATION */}
      <nav className='relative md:hidden z-20 border border-black'>
        <Image alt='menu_icon' src={isMenuOpen ? menuIconWhite : menuIcon} className={isMenuOpen ? 'menu-icon' : 'menu-icon menu-icon_inactive'} width={40} onClick={handleMenu}/>
        <div className={isMenuOpen ? 'mobile-nav' : 'mobile-nav mobile-nav_inactive'}>
          <Link className='mobile-nav__link mobile-nav__link_top' href={'/'} onClick={()=>{setIsMenuOpen(false)}}>ABOUT ME</Link>
          <Link className='mobile-nav__link' href='/work' onClick={()=>{setIsMenuOpen(false)}}>WORK</Link>
          <Link className='mobile-nav__link mobile-nav__link_bottom' href={'/'} onClick={()=>{setIsMenuOpen(false)}}>CONTACT</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
