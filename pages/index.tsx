import type { NextPage } from 'next'
import Promo from '../src/components/HomePage/Promo/Promo'
import Consult from '../src/components/HomePage/Consult/Consult'

const IndexPage: NextPage = () => {
  return (
    <>
     <Promo/>
     <Consult/>
    </>
  )
}

export default IndexPage
