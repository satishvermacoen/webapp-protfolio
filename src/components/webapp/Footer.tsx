import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1f1f] py-6">
      <div className="container mx-auto px-6 text-center text-secondary/60">
        <p>&copy; {new Date().getFullYear()} PixelPerfect. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;