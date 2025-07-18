import Link from "next/link";

const Hero: React.FC = () => (
  <section className="relative bg-slate-900 text-white pt-40 pb-24">
    <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-prism.png')"}}></div>
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
    <div className="container mx-auto px-6 text-center relative">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">SCOEN-SOLUTIONS</h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
        We create stunning, user-centric websites that are not only beautiful but also deliver exceptional performance and results.
      </p>
      <Link href="/two" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/30">
        View Our Work
      </Link>
    </div>
  </section>
);

export default Hero;