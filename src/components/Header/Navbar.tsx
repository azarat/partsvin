import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = () => {

  return (
      <nav className="header__nav">
        <ul className="header__nav__menu">
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Главная</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Почему мы</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Процесс</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Логистика</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Склад</a></Link></li>
            <li className="header__nav__menu__item"><Link href="/"><a className='header__nav__menu__link'>Отзывы</a></Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
