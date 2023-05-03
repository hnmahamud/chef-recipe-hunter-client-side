import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp, FaBriefcase, FaListOl } from "react-icons/fa";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

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
    <div className="flex flex-col justify-center items-center my-12 divide-y">
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

      <div className="w-[95%] md:w-[80%] mx-auto space-y-8 pt-8 my-12">
        <div className="text-start md:text-center space-y-4">
          <h2 className="text-blue-500 text-xl md:text-3xl font-extrabold">
            Savor the Flavors of China with Chef's Signature Recipes
          </h2>
          <p className="md:w-[80%] mx-auto text-gray-500">
            Indulge in the authentic taste of Chinese cuisine with a curated
            collection of signature recipes from a renowned Chinese chef. From
            classic favorites to innovative creations, this recipe list offers a
            unique and flavorful experience for any food enthusiast.
          </p>
        </div>
        <div>
          {recipeData &&
            recipeData.map((rd) => (
              <RecipeCard key={rd.id} recipeData={rd}></RecipeCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
