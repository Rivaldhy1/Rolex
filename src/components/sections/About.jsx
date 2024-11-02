import Aos from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
    Aos.refresh();
  }, []);

  return (
    <section className="font-main-font my-10 lg:my-10">
      {/* <div className="border-t border-main-color w-fit mx-auto">
        <h2 className="uppercase text-center font-bold pt-5">Our Story</h2>
      </div> */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-around lg:justify-center lg:space-x-20 mt-12">
        {/*  Bagian Gambar */}
        <div className="order-2 relative mx-auto my-14 w-[298px] h-[298px] md:mx-0 md:order-none lg:w-[538px] lg:h-[538px]">
          <div className="absolute bottom-0 left-0 z-10 bg-main-color w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] dark:bg-main-color-dark"></div>
          <div className="absolute right-0 top-2 z-20">
            <img
              src="assets/about.jpg"
              alt=""
              className=" w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]"
            />
          </div>
        </div>

        {/*  Bagian Teks */}
        <div className="order-1 px-7 space-y-6 md:mt-0 md:order-none md:w-[382px]">
          <div
            className="border-t border-main-color w-fit mx-auto md:mx-0 pb-5"
            data-aos="fade-down"
          >
            <h2 className="uppercase font-bold pt-5 dark:text-title-color-dark">
              Our Story
            </h2>
          </div>
          <h2
            className="text-title-color text-3xl lg:text-3xl font-semibold dark:text-title-color-dark"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Inspirational Watch of this year
          </h2>
          <p
            className="text-text-color text-sm lg:text-base dark:text-text-color-dark"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            The latest and modern watches of this year, is available in various
            presentations in this store, discover them now.
          </p>
          <a
            className="inline-block bg-black text-white py-3 px-8 text-sm lg:text-base shadow-lg hover:bg-gray-800 transition duration-300 dark:bg-button-color-dark"
            href="#"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Discover
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
