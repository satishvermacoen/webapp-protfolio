import SectionTitle from "./SectionTitle";
import { PortfolioProps } from "./types";

const Portfolio: React.FC<PortfolioProps> = ({ items }) => (
  <section id="portfolio" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle>Portfolio</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="#" className="text-white text-lg font-bold border-2 border-white rounded-full py-3 px-6 hover:bg-white hover:text-black transition-colors">View Project</a>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-5">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;