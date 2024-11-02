/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { handleCartData, USDollar } from "../../services/index";

const CardFeatured = ({ data, isActive, onClick, aosDelay }) => {
  useEffect(() => {
    Aos.refresh();
  }, [isActive]);

  return (
    <div
      className={`relative transition bg-white w-[280px] h-fit mx-auto md:mx-0 flex flex-col items-center border border-border-color hover:shadow-lg py-8 space-y-6 lg:w-[312px] cursor-pointer dark:bg-container-color-dark dark:border-border-color-dark ${
        isActive ? "h-[470px]" : ""
      } `}
      id={data.id}
      key={data.id}
      onClick={() => onClick(data.id)}
      data-aos="fade-down"
      data-aos-delay={aosDelay}
    >
      <div className="bg-main-color py-2 px-6 absolute top-0 left-0 dark:bg-main-color-dark">
        <p className="text-white uppercase text-sm text-center">sale</p>
      </div>
      <div className="">
        <img src={data.image} alt={data.title} className="mx-auto" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="uppercase font-semibold tracking-wide dark:text-title-color-dark">
          {data.title}
        </p>
        <p className="text-main-color font-semibold tracking-wide dark:text-main-color-dark">
          {USDollar.format(data.price)}
        </p>
      </div>
      {isActive && (
        <a
          className={`inline-block uppercase bg-button-color py-4 px-8 text-white text-xs cursor-pointer dark:bg-button-color-dark`}
          id="buttonReu"
          onClick={() => handleCartData(data)}
        >
          Add to cart
        </a>
      )}
    </div>
  );
};

export default CardFeatured;
