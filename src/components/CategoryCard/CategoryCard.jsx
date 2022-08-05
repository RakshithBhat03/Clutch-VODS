import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filteredVideosByCategory } from "../../features/videoSlice";
import { GrowLoader } from "../";
const CategoryCard = ({ category: { categoryName, thumbnail } }) => {
  const [imageLoader, setImageLoader] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCategory = () => {
    navigate("/explore");
    dispatch(filteredVideosByCategory(categoryName));
  };
  return (
    <div className="p-2 box-shadow--theme hover:cursor-pointer shadow-slate-400 border dark:border-slate-600">
      <div
        onClick={handleCategory}
        className={`relative h-full ${imageLoader && `h-full`}`}>
        {imageLoader && <GrowLoader />}
        <figure className={`${imageLoader && `hidden`} `}>
          <img
            src={thumbnail}
            alt="category"
            className="w-full h-56 sm:h-auto"
            onLoad={() => setImageLoader(false)}
          />
        </figure>
        <div
          className={`${
            imageLoader
              ? `hidden`
              : `absolute flex items-center justify-center w-full h-full top-0 left-0 bg-black/50 hover:bg-transparent hover:font-semibold`
          }`}>
          <h3 className="text-xl text-white sm:text-2xl md:text-3xl underline underline-offset-4">
            {categoryName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export { CategoryCard };
