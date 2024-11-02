import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Newsletter from "../components/common/Newsletter";
import Navbar from "../components/sections/Navbar";
import ProductList from "../components/sections/ProductsList";
import FeaturedList from "../components/sections/FeaturedList";
import NewArrivalsList from "../components/sections/NewArrivalsList";
import TestimonialList from "../components/sections/TestimonialsList";
import Footer from "../components/sections/Footer";

const Main = () => {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <main className={`${isDarkMode ? "bg-body-color-dark" : "bg-body-color"}`}>
      <Navbar />
      <Home />
      <FeaturedList />
      <About />
      <ProductList />
      <TestimonialList />
      <NewArrivalsList />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Main;
