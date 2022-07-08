import Link from 'next/link'
import LogoSVG from '../../assets/svg/main-logo.svg'

const Logo = () => {
  return (
    <div className="footer__logo">
      <Link href="/">
        <a><LogoSVG /></a>
      </Link>
      
    </div>
  )
}

export default Logo
