import Footer from '@/components/landingpage/Footer'
import Header from '@/components/landingpage/Header'
import Contact from '@/components/webapp/Contact'
import React from 'react'

const page = () => {
  return (
    <div className="pt-24 bg-white">
        <Header/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page