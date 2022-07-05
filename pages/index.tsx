import type { NextPage } from 'next'
import Promo from '../src/components/HomePage/Promo/Promo'
import Consult from '../src/components/HomePage/Consult/Consult'
import Services from '../src/components/HomePage/Services/Services'
import Danger from '../src/components/HomePage/Danger/Danger'
import Advantages from '../src/components/HomePage/Advantages/Advantages'
import WorkProcess from '../src/components/HomePage/WorkProcess/WorkProcess'
import Troubleshooting from '../src/components/HomePage/Troubleshooting/Troubleshooting'
import Logistic from '../src/components/HomePage/Logistic/Logistic'
import Storage from '../src/components/HomePage/Storage/Storage'
import Clients from '../src/components/HomePage/Clients/Clients'
import Reviews from '../src/components/HomePage/Reviews/Reviews'
import Faq from '../src/components/HomePage/Faq/Faq'
import ConsultBottom from '../src/components/HomePage/ConsultBottom/ConsultBottom'


const IndexPage: NextPage = () => {
  return (
    <>
     <Promo/>
     <Consult/>
     <Services/>
     <Danger/>
     <Advantages/>
     <WorkProcess/>
     <Troubleshooting/>
     <Logistic/>
     <Storage/>
     <Clients/>
     <Reviews/>
     <Faq/>
     <ConsultBottom/>
    </>
  )
}

export default IndexPage
