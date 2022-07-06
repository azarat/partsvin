import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = () => {

  return (
      <nav className="footer__nav">
        <ul className="footer__nav__menu">
            <li className="footer__nav__menu__item"><Link href="/"><a className='footer__nav__menu__link'>Головна</a></Link></li>
            <li className="footer__nav__menu__item"><Link href="/#advantages"><a className='footer__nav__menu__link'>Чому ми</a></Link></li>
            <li className="footer__nav__menu__item"><Link href="/#workProcess"><a className='footer__nav__menu__link'>Процес</a></Link></li>
            <li className="footer__nav__menu__item"><Link href="/#logistic"><a className='footer__nav__menu__link'>Логістика</a></Link></li>
            <li className="footer__nav__menu__item"><Link href="/#storage"><a className='footer__nav__menu__link'>Склад</a></Link></li>
            <li className="footer__nav__menu__item"><Link href="/#reviews"><a className='footer__nav__menu__link'>Відгуки</a></Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
