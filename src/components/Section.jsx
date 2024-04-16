import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crossess,
  crossessOffset,
  customPadding,
  children,
}) => {
  return (
    <div
      className={`relative ${customPadding || "py-10 lg:py-16 xl:py-20"}  ${
        className || ""
      }`}
      id={id}
    >
      {children}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"></div>
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"></div>

      {crossess && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossessOffset && crossessOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          ></div>
          <SectionSvg />
        </>
      )}
    </div>
  );
};

export default Section;
