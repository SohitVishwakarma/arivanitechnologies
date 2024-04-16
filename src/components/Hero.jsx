import { useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { Gradient, BackgroundCircles, BottomLine } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={`pt-[12rem] -mt-[5.25rem]`}
      crossess
      crossessOffset={`lg:translate-y-[5.25rem]`}
      customPadding
      id={`hero`}
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="mb-6 h1">
            E2E Application Development&nbsp;and&nbsp;Grow Business with {""}
            <span className="relative inline-block">
              Arivani{" "}
              <img
                src={curve}
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
          Leverage Your Business With Our Expert Team and Innovative Strategies.
          </p>
          <Button href={`/learnmore`} white>
            Learn More
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"></div>
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src="./team.jpg"
                  alt="AI"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />
                <Generating
                  className={`absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 `}
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((item, idx) => (
                      <li key={idx} className="p-5">
                        <img src={item} width={24} height={25} alt={item} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className={`hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex`}
                    title="ArivAni Team"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
          <Gradient />
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
       {/*  <CompanyLogos className="relative z-10 hidden mt-20 lg:block" /> */}
      </div>
      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;