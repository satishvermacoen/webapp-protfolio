import Icon, { } from "@/components/landingpage/Icon";
import { ClientsProps } from "./types";
import SectionTitle from "./SectionTitle";

const Clients: React.FC<ClientsProps> = ({ clients }) => (
  <section id="clients" className="py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      <SectionTitle>Our Clients</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center p-6 bg-white rounded-xl shadow-lg border border-transparent hover:border-yellow-400 hover:shadow-xl transition-all duration-300">
            <div className="p-4 bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-500 rounded-full mr-5">
              <Icon name={client.icon} className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900">{client.name}</h4>
              <p className="text-gray-600">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;