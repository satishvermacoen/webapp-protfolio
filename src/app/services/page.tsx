import Footer from '@/components/landingpage/Footer'
import Header from '@/components/landingpage/Header'
import Services from '@/components/landingpage/Service'
import { servicesData } from '@/components/landingpage/types/data'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Services services={servicesData} />
      <Footer/>
    </div>
  )
}

export default page