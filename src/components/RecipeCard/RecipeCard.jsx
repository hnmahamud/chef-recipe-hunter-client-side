import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipeData }) => {
  const { id, recipe_name, image_url, ingredients, cooking_method, rating } =
    recipeData;
  return (
    <div className="md:grid md:grid-cols-3 md:gap-4 border mb-4 shadow rounded-md">
      <div>
        <img className="rounded-sm" src={image_url} alt="" />
      </div>
      <div className="col-span-2 p-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {recipe_name}
        </h5>
        <div className="text-gray-500 space-y-2">
          <div>
            <h3 className="text-gray-700 font-semibold">Ingredients:</h3>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((i, index) => (
                <div
                  key={index}
                  className="border p-1 rounded-md text-gray-500"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold">Cooking method:</h3>
            <span>{cooking_method}</span>
          </div>
          <div className="flex">
            <h3 className="text-gray-700 font-semibold">Rating:</h3>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
