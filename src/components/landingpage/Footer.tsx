const Footer: React.FC = () => (
  <footer id="contact" className="bg-slate-900 text-white">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">JANE DOE</h3>
          <p className="text-slate-400">Creative Web Designer & Developer. <br/>Let's build something amazing together.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#services" className="text-slate-400 hover:text-pink-400 transition-colors">Services</a></li>
            <li className="mb-2"><a href="#portfolio" className="text-slate-400 hover:text-pink-400 transition-colors">Portfolio</a></li>
            <li className="mb-2"><a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Me</h3>
          <p className="text-slate-400 mb-2">hello@janedoe.design</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; 2024 Jane Doe. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;