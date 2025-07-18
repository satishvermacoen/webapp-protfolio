import { SVGProps } from "react";

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Client {
  icon: string;
  name: string;
  description: string;
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export interface SectionTitleProps {
  children: React.ReactNode;
}

export interface ServicesProps {
  services: Service[];
}

export interface PortfolioProps {
  items: PortfolioItem[];
}

export interface ClientsProps {
  clients: Client[];
}