import { useEffect, useState } from "react";
import Testimonial from "../common/Testimonial";
import data from "../../../data/data.json";
import Aos from "aos";

const testimonials = data.testimonials;

const TestimonialsList = () => {
  const [indexTesti, setIndexTesti] = useState(0);
  const [isPrevClicked, setIsPrevClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handlePrev = () => {
    setIndexTesti((index) =>
      index === 0 ? testimonials.length - 1 : index - 1
    );
  };

  //   prev
  //   index = 2
  //   index = 1
  //   index = 0

  //   next
  //   index = 1 % 3 = 1
  //   index = 2 % 3 = 2
  //   index = 3 % 3 = 0

  const handleNext = () => {
    setIndexTesti((index) => (index + 1) % testimonials.length);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section>
      {/* <div className="flex flex-col md:flex-row md:space-x-28 md:justify-end items-center"> */}
      <div className="grid md:grid-cols-2 place-items-center">
        <div
          className="space-y-10 md:justify-self-end lg:justify-self-center"
          data-aos="fade-down"
        >
          <Testimonial
            data={testimonials[indexTesti]}
            key={testimonials[indexTesti].id}
          />
          <div className="mx-6 md:mx-0 flex space-x-8">
            <div
              className={`bg-white p-2 cursor-pointer ${
                isPrevClicked ? "shadow-none" : "shadow-md"
              } transition-shadow dark:bg-container-color-dark`}
              onClick={() => {
                handlePrev();
                setIsPrevClicked(true);
                setTimeout(() => setIsPrevClicked(false), 300); // reset shadow after transition
              }}
            >
              <span className="sr-only">Left</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-main-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <div
              className={`bg-white p-2 cursor-pointer ${
                isNextClicked ? "shadow-none" : "shadow-md"
              } transition-shadow dark:bg-container-color-dark`}
              onClick={() => {
                handleNext();
                setIsNextClicked(true);
                setTimeout(() => setIsNextClicked(false), 300); // reset shadow after transition
              }}
            >
              <span className="sr-only">Right</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-main-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative mx-auto my-14 w-[298px] h-[298px] md: lg:w-[538px] lg:h-[538px]">
          <div
            className="absolute top-0 right-0 z-10 bg-main-color w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] dark:bg-main-color-dark"
            data-aos="fade-down-left"
          ></div>
          <div
            className="absolute left-0 bottom-0 z-20"
            data-aos="fade-up-right"
            data-aos-delay="250"
          >
            <img
              src="assets/testimonial.jpg"
              alt=""
              className=" w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
