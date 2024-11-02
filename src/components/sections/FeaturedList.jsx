import CardFeatured from "../common/CardFeatured";
import data from "../../../data/data.json";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedList = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardClick = (id) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  };
  const featuredsData = data.featureds;

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
    Aos.refresh();
  }, [featuredsData]);

  return (
    <section className="font-main-font my-20 md:my-0" id="featured">
      <div className="border-t border-main-color w-fit mx-auto">
        <h2 className="uppercase text-center font-bold pt-5 dark:text-title-color-dark">
          Featured
        </h2>
      </div>

      <div className="mt-12 flex flex-wrap gap-14 md:justify-center">
        {Array.isArray(featuredsData) &&
          featuredsData.map((featured, index) => (
            <CardFeatured
              key={featured.id}
              data={featured}
              isActive={featured.id === activeCardId}
              onClick={handleCardClick}
              aosDelay={index * 200}
            />
          ))}
      </div>
    </section>
  );
};

export default FeaturedList;
