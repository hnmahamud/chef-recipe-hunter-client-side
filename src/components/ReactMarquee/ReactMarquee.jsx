import React from "react";
import Marquee from "react-fast-marquee";

const ReactMarquee = () => {
  return (
    <div className="my-12 space-y-4">
      <div className="text-start md:text-center space-y-4 p-2">
        <h2 className="text-blue-500 text-xl md:text-3xl font-extrabold">
          Savor Our Top-Rated Foods
        </h2>
        <p className="md:w-[80%] mx-auto text-gray-500">
          Delight your senses with our flavorful Chinese cuisine, crafted by our
          expert chefs using traditional cooking techniques and authentic
          ingredients. From the rich umami of our savory Kung Pao chicken to the
          delicate sweetness of our steamed dumplings, our menu offers a diverse
          range of dishes that are sure to satisfy your cravings. Our chefs
          blend the perfect balance of spices and seasonings to create complex
          flavors that are both bold and comforting. Whether you're in the mood
          for a hearty noodle dish, a crispy fried appetizer, or a refreshing
          soup, our Chinese cuisine will take you on a journey through the rich
          culinary history of China.
        </p>
      </div>

      <Marquee>
        <img
          className="h-48"
          src="https://img.freepik.com/free-photo/delicious-seafood-fried-rice-with-shrimp-eggs-spring-onions-with-soup_1150-22892.jpg?w=996&t=st=1683058551~exp=1683059151~hmac=3d8bffbd1d5227cb1ea4b713765a81e1c8fcd54881dc7ed5afd9e5541cd4389e"
          alt=""
        />
        <img
          className="h-48"
          src="https://img.freepik.com/free-photo/chicken-stir-fry-vegetables_123827-21544.jpg?w=996&t=st=1683057670~exp=1683058270~hmac=df8da274640181be793b5ef165fa1d19ac03ef4a16fb1d1e2afb0aaef279c788"
          alt=""
        />
        <img
          className="h-48"
          src="https://img.freepik.com/free-photo/stir-frying-beef-with-sweet-peppers-green-beans_2829-20111.jpg?w=996&t=st=1683059300~exp=1683059900~hmac=c70fd68c2d3c7b4c3aeb2bf58fabac93eb4ed047a12c04428ad3ce2f442f91f2"
          alt=""
        />
        <img
          className="h-48"
          src="https://img.freepik.com/free-photo/high-angle-japanese-dumplings-assortment_23-2148809860.jpg?w=996&t=st=1683058148~exp=1683058748~hmac=05b6b3b8a8cc47291b23ab86713761ef45c65284f6c104dfcc0e3d0396b277ab"
          alt=""
        />
        <img
          className="h-48"
          src="https://img.freepik.com/free-photo/pasta-spaghetti-dark-background_1150-37949.jpg?w=996&t=st=1683058717~exp=1683059317~hmac=a8a4d8a9a13eca108d05415b097df33e883ac0ce759e722601a85e29b69a387a"
          alt=""
        />
        <img
          className="h-48"
          src="https://img.freepik.com/free-photo/chicken-larb-plate-with-dried-chilies-tomatoes-spring-onions-lettuce_1150-27110.jpg?w=996&t=st=1683059104~exp=1683059704~hmac=3397d984f2ee2a221e503409b8b37d84353de04bece82e1dbdcfa14daf8eef1f"
          alt=""
        />
      </Marquee>
    </div>
  );
};

export default ReactMarquee;
