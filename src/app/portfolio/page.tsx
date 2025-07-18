import Footer from '@/components/landingpage/Footer'
import Header from '@/components/landingpage/Header'
import Portfolio from '@/components/landingpage/Portfolio'
import { portfolioData } from '@/components/landingpage/types/data'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Portfolio items={portfolioData} />
      <Footer/>
    </div>
  )
}

export default page