import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/webapp/Header';
import Hero from '@/components/webapp/Hero';
import Portfolio from '@/components/webapp/Portfolio';
import Contact from '@/components/webapp/Contact';
import Footer from '@/components/webapp/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PixelPerfect | Web Design Portfolio</title>
        <meta name="description" content="A professional web design portfolio created with Next.js, TypeScript, and Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Portfolio />
        {/* You can add an 'About' section component here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;