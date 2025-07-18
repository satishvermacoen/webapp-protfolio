import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card-foreground py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center text-secondary/60">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-accent transition-colors"><Github /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-accent transition-colors"><Linkedin /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} PixelPerfect. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built with ❤️</p>
      </div>
    </footer>
  );
}


export default Footer;