import Logo from './Logo'
import Navbar from './Navbar'
import Networks from './Networks'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import BurgerSVG from '../../assets/svg/burger.svg'
import BurgerCloseSVG from '../../assets/svg/burger-close.svg'



const Header = () => {
  const [offset, setOffset] = useState(0);
  const { pathname } = useRouter();
  const [ active, setActive ] = useState(false)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <header className={`header${(offset > 20 || pathname != '/') ? " scrolled" : ""}`}>
      <div className="container header__container__desc">
        <Logo /> 
        <Navbar />
        <Networks /> 
      </div>
      <button className={"header__menu-burger" + (active == true ? " isHidden" : "")} onClick={() => setActive(!active)}><BurgerSVG/></button>
      <button className={"header__menu-burger--close" + (active == true ? "" : " isHidden")} onClick={() => setActive(!active)}><BurgerCloseSVG/></button>
      <div className={"container header__container__mob" + (active == true ? "--active" : "")}>
        <Logo /> 
        <Navbar />
        <Networks /> 
      </div>
    </header>
  )
}

export default Header
