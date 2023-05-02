import { Carousel } from "flowbite-react";
import React from "react";

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[calc(100vh-76px)]">
      <Carousel slideInterval={5000}>
        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/chef-using-rolling-pin-dough_23-2148742222.jpg?w=1380&t=st=1683022103~exp=1683022703~hmac=7d11b784d942827fa5b7a7d50599edb3643d08253c7b78bf9f072c6ef27f33e3")`,
            backgroundColor: "rgb(96, 96, 96)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
          className="flex h-full items-center justify-center text-center text-gray-200"
        >
          <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-xl md:text-4xl font-extrabold">
              Find your perfect chef match
            </h2>
            <p className="hidden md:block md:w-[60%]">
              Welcome to our chef hunting website, where you can search for
              talented chefs from around the world to meet your culinary needs.
            </p>
            <button
              type="button"
              className="w-[50%] md:w-[25%] text-gray-200 border border-gray-200 hover:bg-gray-300 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-md text-sm md:px-5 md:py-2.5 text-center"
            >
              Details
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/cute-girl-holding-electric-mixer_23-2148475804.jpg?w=1380&t=st=1683022291~exp=1683022891~hmac=ed6b2c7cc91b33ac56b15260184a5b5660b766009cb436d7d386cac8b67169c4")`,
            backgroundColor: "rgb(96, 96, 96)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
          className="flex h-full items-center justify-center text-center text-gray-200"
        >
          <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-xl md:text-4xl font-extrabold">
              Elevate your dining experience
            </h2>
            <p className="hidden md:block md:w-[60%]">
              Discover the art of fine dining with our exclusive culinary
              experiences, curated by our team of expert chefs and sommeliers.
            </p>
            <button
              type="button"
              className="w-[50%] md:w-[25%] text-gray-200 border border-gray-200 hover:bg-gray-300 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-md text-sm md:px-5 md:py-2.5 text-center"
            >
              Details
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/chef-preparing-traditional-japanese-food_23-2148759584.jpg?w=1380&t=st=1683022140~exp=1683022740~hmac=8ffb5be9e3aab4a584c352608b521f844c195fde74a03f2172285a8df1fd9174")`,
            backgroundColor: "rgb(96, 96, 96)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
          className="flex h-full items-center justify-center text-center text-gray-200"
        >
          <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-xl md:text-4xl font-extrabold">
              Discover the flavors of the world
            </h2>
            <p className="hidden md:block md:w-[60%]">
              Our expert chefs will guide you through the preparation of
              authentic dishes from a variety of cuisines, from classic French
              cuisine to exotic Asian flavors.
            </p>
            <button
              type="button"
              className="w-[50%] md:w-[25%] text-gray-200 border border-gray-200 hover:bg-gray-300 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-md text-sm md:px-5 md:py-2.5 text-center"
            >
              Details
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/spaghetti-with-pesto-prawns-served-plate_1220-3041.jpg?w=1380&t=st=1683022133~exp=1683022733~hmac=ef44d9fb059a347c3b7882bdd1e093a511cd4c11b69c157622b7d42a6e4e0642")`,
            backgroundColor: "rgb(96, 96, 96)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
          className="flex h-full items-center justify-center text-center text-gray-200"
        >
          <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-xl md:text-4xl font-extrabold">
              Cook like a pro at home
            </h2>
            <p className="hidden md:block md:w-[60%]">
              Our team of nutritionists and chefs work together to create meals
              that are rich in nutrients, vitamins, and antioxidants, and are
              tailored to meet specific dietary needs.
            </p>
            <button
              type="button"
              className="w-[50%] md:w-[25%] text-gray-200 border border-gray-200 hover:bg-gray-300 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-md text-sm md:px-5 md:py-2.5 text-center"
            >
              Details
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
