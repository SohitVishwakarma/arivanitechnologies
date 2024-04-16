import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import PriceList from "./PriceList";

const Pricing = () => {
  return (
    <Section id={`pricing`} className={`overflow-hidden`}>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            alt="Sphere"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-event-none">
            <img src={stars} alt="Stars" className="w-full" />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title={`Pay once, use forever`}
        />

        <div className="relative">
          <PriceList />
          <LeftLine />
          <RightLine />

          <div className="flex justify-center mt-10">
            <a
              href="/pricing"
              className="text-xs font-code font-bold tracking-wider uppercase border-b"
            >
              See the full details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
