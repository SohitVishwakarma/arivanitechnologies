import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  
  return (
    <Section crossess className={`!px-0 !py-10`}>
      <div className="container flex items-center justify-center gap-10 sm:justify-between max-sm:flex-col">
        <div>
          <p className="caption text-n-4 lg:block text-light-white">
            © {new Date().getFullYear()} All Rights Reserved. Arivani Technologies Private Limited.
          </p>
          <address className="text-n-4 lg:block text-light-white">
            1646 West HWY 160, Fort Mill, SC, USA - 29708<br />
            +1(980) 298 - 9513<br />
            B1/14, Sector L, Aliganj, Near Mama Chauraha, Lucknow, Uttar Pradesh 226024<br />
            +91-9026018365<br />
            +91-9219630752 (HR)<br />
            <a href="mailto:admin@arivani.com" className="text-zinc-400 hover:text-n-4">admin@arivani.com</a>
          </address>
        </div>
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
          <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-5"
        >
          

          <img src={item.iconUrl} alt={item.title} width={16} height={16}  />
        </a>
          ))}
        </ul>
      
      </div>
    </Section>
  );
};

export default Footer;

