import Aos from "aos";
import dummy from "../../../data/data.json";
import { handleCartData, USDollar } from "../../services";
import { useEffect } from "react";

const Home = () => {
  const data = dummy.home;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen lg:mx-36 ">
      <div className="flex justify-between md:justify-around lg:justify-evenly items-center flex-wrap">
        {/* Link */}
        <div
          className="h-fit flex flex-col items-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <a
            href=""
            className="text-color-light -rotate-90 my-9 dark:text-text-color-dark"
          >
            Facebook
          </a>
          <a
            href=""
            className="text-color-light -rotate-90 my-9 dark:text-text-color-dark"
          >
            Twitter
          </a>
          <a
            href=""
            className="text-color-light -rotate-90 my-9 dark:text-text-color-dark"
          >
            Instagram
          </a>
        </div>

        {/* Description */}
        <div className="order-3 px-8 py-10 md:p-0 md:mt-12 md:w-[580px] lg:order-none space-y-4 lg:w-[367px]">
          <h1
            className="uppercase text-title-color text-2xl lg:text-4xl font-bold leading-relaxed dark:text-title-color-dark"
            data-aos="fade-down"
            data-aos-delay="370"
          >
            new watch {data.title}
          </h1>
          <p
            className="text-text-color dark:text-text-color-dark"
            data-aos="zoom-in"
          >
            {data.description}
          </p>
          <p className="text-main-color text-xl font-bold" data-aos="fade-up">
            {USDollar.format(data.price)}
          </p>
          <div className="pt-4" data-aos="fade-up">
            <button className="bg-[#BFBFBF] text-text-color py-3 px-5 font-semibold">
              Discover
            </button>
            <button
              className="uppercase bg-button-color py-4 px-6 text-white"
              onClick={() => {
                handleCartData(data);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Img */}
        <div
          className="bg-main-color w-[220px] h-[380px] flex items-center lg:w-[480px] lg:h-[640px] dark:bg-main-color-dark"
          data-aos="fade-down"
        >
          <img
            src="assets/home_1.png"
            alt=""
            className="w-[240px] mx-auto lg:w-[420px]"
            data-aos="fade-down-left"
            data-aos-delay="350"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
