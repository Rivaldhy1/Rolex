import Product from "../common/Product";
import data from "../../../data/data.json";
import { useEffect } from "react";
import Aos from "aos";

const ProductsList = () => {
  const productsData = data.products;

  useEffect(() => {
    Aos.init({
      easing: "ease-in-out",
      once: true,
    });
    Aos.refresh();
  }, [productsData]);

  return (
    <section className="font-main-font my-20" id="products">
      <div className="border-t border-main-color w-fit mx-auto dark:border-main-color-dark">
        <h2 className="uppercase text-center font-bold pt-5 dark:text-title-color-dark">
          Products
        </h2>
      </div>

      <div className="grid grid-cols-products-2 gap-5 place-items-center md:grid-cols-products-3 md:gap-8 place-content-center mt-12">
        {Array.isArray(productsData) &&
          productsData.map((product, index) => (
            <Product data={product} key={product.id} aosDelay={index * 100} />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
