import Link from "next/link";

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 shadow-md shadow-gray-200/50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900 tracking-wider">
        SCOEN
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors relative group">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-pink-500 transition-colors relative group">
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/portfolio" className="text-gray-600 hover:text-pink-500 transition-colors relative group">
          Portfolio
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors relative group">
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      <div className="hidden md:flex items-center space-x-2">
         <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium">EN</Link>
         <span className="text-gray-300">/</span>
         <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">DE</Link>
      </div>
      <button className="md:hidden text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </header>
);

export default Header;