import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaThumbsUp,
  FaBriefcase,
  FaListOl,
  FaInfoCircle,
} from "react-icons/fa";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const {
    id,
    name,
    picture,
    number_of_recipes,
    years_of_experience,
    likes,
    bio,
  } = chefDetails;
  console.log(chefDetails);

  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    fetch(
      `https://chef-recipe-hunter-server-hnmahamud.vercel.app/chef-recipe/${id}`
    )
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, [id]);
  console.log(recipeData);

  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="max-w-lg">
        <Card>
          <div className="flex flex-col items-center">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src={picture}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="flex flex-col gap-2 font-normal text-gray-500 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500 ">
                  <FaThumbsUp></FaThumbsUp>
                  <span>Likes: {likes}</span>
                </div>
                <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500">
                  <FaBriefcase></FaBriefcase>
                  <span>Years of experience: {years_of_experience}</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500">
                <FaListOl></FaListOl>
                <span>Numbers of recipes: {number_of_recipes}</span>
              </div>
              <div className="border p-2 rounded-md text-gray-500">
                <strong>Bio:</strong> {bio}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChefDetails;
