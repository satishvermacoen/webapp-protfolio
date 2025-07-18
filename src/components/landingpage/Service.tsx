import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import { ServicesProps } from "./types";

const Services: React.FC<ServicesProps> = ({ services }) => (
  <section id="services" className="py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center">
            <div className="inline-block p-4 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-full mb-6 ring-8 ring-white">
              <Icon name={service.icon} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <a href="#" className="text-pink-500 font-semibold group-hover:underline flex items-center justify-center">
              Learn More <Icon name="arrow-right" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;