import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filteredVideosByCategory } from "../../features/videoSlice";
const CategoryCard = ({ category: { categoryName, thumbnail } }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCategory = () => {
    navigate("/explore");
    dispatch(filteredVideosByCategory(categoryName));
  };
  return (
    <div
      onClick={handleCategory}
      className="relative box-shadow--theme p-2 hover:cursor-pointer hover:shadow-slate-400 relative">
      <figure>
        <img src={thumbnail} alt="category" className="w-full h-56 sm:h-auto" />
      </figure>
      <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 bg-black/50 hover:bg-transparent hover:font-semibold">
        <h3 className="text-xl text-white sm:text-2xl md:text-3xl underline underline-offset-4">
          {categoryName}
        </h3>
      </div>
    </div>
  );
};

export { CategoryCard };
