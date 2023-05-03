import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp, FaBriefcase, FaListOl } from "react-icons/fa";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const ChefDetails = () => {
  const { id } = useParams();

  const [chefDetails, setChefDetails] = useState(null);
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    fetch(
      `https://chef-recipe-hunter-server-hnmahamud.vercel.app/chef-details/${id}`
    )
      .then((response) => response.json())
      .then((data) => setChefDetails(data));
  }, [id]);

  useEffect(() => {
    fetch(
      `https://chef-recipe-hunter-server-hnmahamud.vercel.app/chef-recipe/${id}`
    )
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, [id]);

  if (!chefDetails && !recipeData) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="flex flex-col justify-center items-center my-12 divide-y">
      {chefDetails && (
        <div className="max-w-2xl">
          <Card>
            <div className="flex flex-col items-center">
              <img
                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                src={chefDetails.picture}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {chefDetails.name}
              </h5>
              <div className="flex flex-col gap-2 font-normal text-gray-500">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500 ">
                    <FaThumbsUp></FaThumbsUp>
                    <span>Likes: {chefDetails.likes}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500">
                    <FaBriefcase></FaBriefcase>
                    <span>
                      Years of experience: {chefDetails.years_of_experience}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1 border px-1 rounded-md text-gray-500">
                  <FaListOl></FaListOl>
                  <span>
                    Numbers of recipes: {chefDetails.number_of_recipes}
                  </span>
                </div>
                <div className="border p-2 rounded-md text-gray-500">
                  <strong>Bio:</strong> {chefDetails.bio}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="w-[95%] md:w-[80%] mx-auto space-y-8 pt-8 mt-12">
        <div className="text-start md:text-center space-y-4">
          <h2 className="text-blue-500 text-xl md:text-3xl font-extrabold">
            Savor the Flavors of China with {chefDetails?.name}'s Signature
            Recipes
          </h2>
          <p className="md:w-[80%] mx-auto text-gray-500">
            Each recipe ensuring the highest quality and authenticity. With
            easy-to-follow instructions and readily available ingredients, you
            can recreate these delectable dishes at home and impress your family
            and friends with your culinary skills.
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
