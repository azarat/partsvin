import type { NextPage } from 'next'
import Promo from '../src/components/HomePage/Promo/Promo'
import Consult from '../src/components/HomePage/Consult/Consult'
import Services from '../src/components/HomePage/Services/Services'

const IndexPage: NextPage = () => {
  return (
    <>
     <Promo/>
     <Consult/>
     <Services/>
    </>
  )
}

export default IndexPage
