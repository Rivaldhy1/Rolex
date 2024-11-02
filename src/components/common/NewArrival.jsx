import { useEffect } from "react";
import Button from "./Button";
import { handleCartData, USDollar } from "../../services/index";
import Aos from "aos";

/* eslint-disable react/prop-types */
const NewArrival = ({ data, onclick, isActive, aosDelay }) => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
    Aos.refresh();
  }, [isActive]);

  return (
    <div
      className={`relative transition w-[312px] h-[371px] flex flex-col items-center justify-center border border-border-color dark:border-border-color-dark cursor-pointer hover:shadow-md ${
        isActive ? "h-[500px]" : ""
      }`}
      key={data.id}
      onClick={() => onclick(data.id)}
      data-aos="fade-down"
      data-aos-delay={aosDelay}
    >
      <div className="absolute top-5 right-5 bg-main-color py-2 px-5">
        <p className="uppercase text-white text-sm">new</p>
      </div>
      <div className="text-center space-y-4">
        <img src={data.image} alt={data.image} className="mx-auto" />
        <div className="space-y-2">
          <p className="uppercase font-semibold dark:text-title-color-dark">
            {data.title}
          </p>
          <p className="text-main-color font-semibold tracking-wider">
            {USDollar.format(data.price)}
          </p>
        </div>
      </div>

      {isActive && (
        <Button
          text={"Add to cart"}
          style={"mt-10"}
          onClick={() => handleCartData(data)}
        />
      )}
    </div>
  );
};

export default NewArrival;
