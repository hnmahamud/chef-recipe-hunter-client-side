import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import ChefCard from "../../components/ChefCard/ChefCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ReactMarquee from "../../components/ReactMarquee/ReactMarquee";
import newsLatter from "../../assets/newslatter.gif";
import { TextInput } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";

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
      {/* Slider section */}
      <Slider></Slider>

      {/* List of chef section */}
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

      {/* Tof rated rood section */}
      <ReactMarquee></ReactMarquee>

      {/* Subscribe to My Newsletter section */}
      <div className="w-[95%] md:w-[70%] mx-auto md:flex md:justify-between md:items-center space-y-8 mb-12">
        <div className="text-start space-y-2 flex-grow">
          <h2 className="text-blue-500 text-xl md:text-3xl font-extrabold">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500">
            Get access to our latest recipes by joining the weekly newsletter
          </p>
          <TextInput
            className="md:w-[50%]"
            id="email1"
            type="email"
            placeholder="name@gmail.com"
          />
          <button className="flex gap-2 text-white border border-blue-500 bg-blue-500 hover:bg-blue-600 font-medium rounded-md text-sm text-center px-4 py-1">
            <span>Submit</span>
            <FaTelegramPlane className="mt-1"></FaTelegramPlane>
          </button>
        </div>
        <div>
          <img className="h-96" src={newsLatter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
