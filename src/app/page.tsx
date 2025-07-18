import Clients from '@/components/landingpage/Clients';
import { clientsData, portfolioData, servicesData } from '@/components/landingpage/types/data';
import Footer from '@/components/landingpage/Footer';
import Header from '@/components/landingpage/Header'
import Hero from '@/components/landingpage/Hero'
import Portfolio from '@/components/landingpage/Portfolio';
import Services from '@/components/landingpage/Service';
import React from 'react'

const page = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services services={servicesData} />
        <Portfolio items={portfolioData} />
        <Clients clients={clientsData} />
      </main>
      <Footer />
    </div>
  );
}

export default page
