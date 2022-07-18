import React, { useState } from 'react'
import Link from 'next/link'

var scrollSmooth = require("scroll-smooth")

const Navbar = () => {
  const smoothScroll: any = (sectionName: string) => {
    scrollSmooth.to(document.querySelector(sectionName), {
      duration: 1500,
      offset: -80,
    })
  }

  return (
      <nav className="footer__nav">
        <ul className="footer__nav__menu">
            <li className="footer__nav__menu__item" onClick={() => smoothScroll('#promo')}><Link href=""><a className='footer__nav__menu__link'>Головна</a></Link></li>
            <li className="footer__nav__menu__item" onClick={() => smoothScroll('#advantages')}><Link href=""><a className='footer__nav__menu__link'>Чому ми</a></Link></li>
            <li className="footer__nav__menu__item" onClick={() => smoothScroll('#workProcess')}><Link href=""><a className='footer__nav__menu__link'>Процес</a></Link></li>
            <li className="footer__nav__menu__item" onClick={() => smoothScroll('#logistic')}><Link href=""><a className='footer__nav__menu__link' >Логістика</a></Link></li>
            <li className="footer__nav__menu__item" onClick={() => smoothScroll('#storage')}><Link href=""><a className='footer__nav__menu__link'>Склад</a></Link></li>
            <li className="footer__nav__menu__item" onClick={() => smoothScroll('#reviews')}><Link href=""><a className='footer__nav__menu__link'>Відгуки</a></Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
