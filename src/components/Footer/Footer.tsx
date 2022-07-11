import Link from 'next/link'
import React from 'react'
import Address from './Address'
import Logo from './Logo'
import Navbar from './Navbar'
import Networks from './Networks'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Logo/>
        <Navbar/>
        <Address/>
        <Networks/>
      </div>
      <div className="container footer__containerTab">
        <div className="footer__wrapper">
          <Logo/>
          <Networks/>
        </div>
        <Navbar/>
        <Address/>
      </div>
    </footer>
  )
}

export default Footer
