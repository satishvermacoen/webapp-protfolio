import { SectionTitleProps } from "./types";

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{children}</h2>
    <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
  </div>
);

export default SectionTitle;