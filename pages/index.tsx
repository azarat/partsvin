import type { NextPage } from 'next'
import Promo from '../src/components/HomePage/Promo/Promo'
import Consult from '../src/components/HomePage/Consult/Consult'
import Services from '../src/components/HomePage/Services/Services'
import Danger from '../src/components/HomePage/Danger/Danger'
import Advantages from '../src/components/HomePage/Advantages/Advantages'


const IndexPage: NextPage = () => {
  return (
    <>
     <Promo/>
     <Consult/>
     <Services/>
     <Danger/>
     <Advantages/>
    </>
  )
}

export default IndexPage
