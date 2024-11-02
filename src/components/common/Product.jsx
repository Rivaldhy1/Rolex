import { useEffect } from "react";
import { handleCartData, USDollar } from "../../services/index";
import Aos from "aos";

/* eslint-disable react/prop-types */
const Product = ({ data, aosDelay }) => {
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <div
      key={data.id}
      className="relative flex flex-col items-center p-4 space-y-3 transition border border-border-color w-[144px] h-[220px] hover:shadow-md md:w-[200px] md:h-[270px] md:space-y-4 dark:border-border-color-dark dark:bg-container-color-dark"
      data-aos="fade-down"
      data-aos-delay={aosDelay}
    >
      <img src={data.image} alt={data.image} className="w-[75px] md:w-[95px]" />
      <h2 className="uppercase font-medium text-sm dark:text-title-color-dark">
        {data.title}
      </h2>
      <p className="text-main-color font-semibold">
        {USDollar.format(data.price)}
      </p>

      <button
        className="absolute inline-block bottom-0 right-0 bg-button-color w-fit p-2 dark:bg-button-color-dark"
        onClick={() => handleCartData(data)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Product;
