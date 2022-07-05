import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = () => {

  return (
      <nav className="header__nav">
        <ul className="header__nav__menu">
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Головна</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Чому ми</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Процес</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Логістика</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Склад</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Відгуки</a></Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
