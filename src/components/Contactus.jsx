import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crossess>
      <div className="container lg:flex lg:justify-between">
        <div className="max-w-full lg:max-w-[25rem] lg:mr-8 mb-8 lg:mb-0">
          {/* Headline */}
          <h2 className="h2 mb-4 md:mb-8">Contact Us</h2>
          <h3 className="h5 mb-4 md:mb-8">
            admin@arivani.com
          </h3>
          <h4 className="h6 mb-4 md:mb-8">
            +91-9026018365 | +91-9219630752 (HR)
          </h4>
          <h3 className="h6 mb-4 md:mb-8">
            hr@arivani.com 
          </h3>
          <p className="mb-4 md:mb-6 lg:mb-8">Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days. We will be happy to answer your questions.</p>
          {/* subheading */}
          <Button>Button</Button>
        </div>

        <div className="relative lg:w-[calc(100%-25rem)] lg:h-[25rem]">
          <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.290250478848!2d80.95219307450427!3d26.894282060884024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957b82ac0a337%3A0xd281894619ce9167!2sArivani%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1713454928205!5m2!1sen!2sin" 
                    width="600" height="450" 
                    style={{border:"0"}}
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <LeftCurve className="hidden lg:block absolute top-0 left-0 transform translate-y-1/2 -translate-x-1/2" />
          <RightCurve className="hidden lg:block absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mt-8">
        <h2 className="h2 mb-4 md:mb-8 text-center">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" autoComplete="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    
    </Section>
  );
};

export default Collaboration;
