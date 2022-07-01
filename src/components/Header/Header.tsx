import Logo from './Logo'
import Navbar from './Navbar'
import Networks from './Networks'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router';

const Header = () => {

  return (
    <header className='header'>
      <div className="container header__container" style={{color: 'red'}}>
        <Logo /> 
        <Navbar />
        <Networks /> 
      </div>
    </header>
  )
}

export default Header
