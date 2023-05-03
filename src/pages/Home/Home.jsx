import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import ChefCard from "../../components/ChefCard/ChefCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const [chefData, setChefData] = useState(null);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-hnmahamud.vercel.app/all-chef")
      .then((response) => response.json())
      .then((data) => setChefData(data));
  }, []);

  if (!chefData) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <Slider></Slider>

      <div className="w-[95%] md:w-[80%] mx-auto space-y-8 my-12">
        <div className="text-start md:text-center space-y-4">
          <h2 className="text-blue-500 text-xl md:text-3xl font-extrabold">
            Uncover the Secrets of China's Culinary Masters:
            <br className="hidden md:block" />
            The Top Chinese Chefs You Need to Know
          </h2>
          <p className="md:w-[80%] mx-auto text-gray-500">
            Are you ready to discover the best Chinese chefs in the world? Look
            no further than our curated list of culinary masters! These talented
            chefs have dedicated their lives to perfecting the art of Chinese
            cuisine, and their skills and creativity will leave you amazed.
            Whether you're a foodie or a professional chef, this list is sure to
            whet your appetite and leave you hungry for more!
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 gap-4">
          {chefData &&
            chefData.map((cd) => (
              <ChefCard key={cd.id} chefData={cd}></ChefCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
