import { Card } from "flowbite-react";
import React from "react";
import { FaThumbsUp, FaBriefcase, FaListOl } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chefData }) => {
  const { id, picture, name, likes, years_of_experience, number_of_recipes } =
    chefData;
  return (
    <div>
      <Card className="border" imgSrc={picture}>
        <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <div className="flex flex-col gap-2 font-normal text-gray-500">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500 text-xs">
              <FaThumbsUp></FaThumbsUp>
              <span>Likes: {likes}</span>
            </div>
            <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500 text-xs">
              <FaBriefcase></FaBriefcase>
              <span>Years of experience: {years_of_experience}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500 text-xs">
            <FaListOl></FaListOl>
            <span>Numbers of recipes: {number_of_recipes}</span>
          </div>
        </div>
        <Link
          to={`/chef-details/${id}`}
          type="button"
          className="w-full bg-gray-300 text-gray-500 border border-gray-300 hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 text-center"
        >
          View Recipes
        </Link>
      </Card>
    </div>
  );
};

export default ChefCard;
