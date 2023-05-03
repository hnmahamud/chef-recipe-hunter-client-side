import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const RecipeCard = ({ recipeData }) => {
  const { recipe_name, image_url, ingredients, cooking_method, rating } =
    recipeData;
  const [disable, setDisable] = useState(false);

  const handleDisable = () => {
    if (!disable) {
      toast("Item added to favorite!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setDisable(true);
  };

  return (
    <div className="md:grid md:grid-cols-3 md:gap-4 border mb-4 shadow rounded-md">
      <div>
        <img className="h-80 w-full rounded-sm" src={image_url} alt="" />
      </div>
      <div className="col-span-2 p-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
          {recipe_name}
        </h5>
        <div className="text-gray-500 space-y-2">
          <div>
            <h3 className="text-gray-700 font-semibold">Ingredients:</h3>
            <div className="flex flex-wrap gap-1">
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
          <div className="flex items-center gap-2">
            <div className="flex flex-grow">
              <h3 className="text-gray-700 font-semibold">Rating:</h3>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              <span>{parseFloat(rating)}</span>
            </div>
            <button
              disabled={disable}
              onClick={handleDisable}
              type="button"
              className={`flex items-center justify-center font-medium rounded-md text-sm text-center px-4 py-1 ${
                !disable
                  ? "text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white"
                  : "text-gray-300 border border-gray-300"
              }`}
            >
              <span>Favorite</span> <FaHeart className="mt-1 ml-2"></FaHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
