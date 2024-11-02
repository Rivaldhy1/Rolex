import { useEffect, useState } from "react";
import NewArrival from "../common/NewArrival";
import data from "../../../data/data.json";

const NewArrivalsList = () => {
  const [visibleProducts, setVisibleProducts] = useState(1);
  const [activeCardId, setActiveCardId] = useState(null);
  let newArrivalsData = data.newArrivals;

  const handleActive = (id) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleProducts(4); // Tampilkan 4
      } else if (width >= 768) {
        setVisibleProducts(2); // Tampilkan 2
      } else {
        setVisibleProducts(1); // Tampilkan 1
      }
    };

    // Set jumlah produk pertama kali
    updateVisibleProducts();

    // Update jumlah produk
    window.addEventListener("resize", updateVisibleProducts);

    return () => {
      window.removeEventListener("resize", updateVisibleProducts);
    };
  }, []);

  return (
    <section className="font-main-font my-10">
      <div className="border-t border-main-color w-fit mx-auto dark:border-main-color-dark">
        <h2 className="uppercase text-center font-bold pt-5 dark:text-title-color-dark">
          new arrivals
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-12 gap-6">
        {newArrivalsData &&
          newArrivalsData
            .slice(0, visibleProducts)
            .map((product, index) => (
              <NewArrival
                data={product}
                key={product.id}
                isActive={product.id === activeCardId}
                onclick={handleActive}
                aosDelay={index * 200}
              />
            ))}
      </div>
    </section>
  );
};

export default NewArrivalsList;
