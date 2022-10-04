import { getCategories } from "../../actions";
import { CategoryCard, GrowLoader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
const Home = () => {
  const [imageLoader, setImageLoader] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.video);
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);
  useDocumentTitle("Home | Clutch VODS");
  return (
    <div className="flex-1 flex flex-col ml-20 md:ml-0 p-1 pb-4">
      <div className="p-1 border dark:border-slate-600 w-full box-shadow--theme">
        <div
          className={`${
            imageLoader
              ? `lg:h-[28rem] xl:h-[36rem] relative hero`
              : `relative hero`
          }`}>
          {imageLoader && <GrowLoader width="w-16" height="h-16" />}
          <figure className={`${imageLoader && `hidden`} `}>
            <img
              src="https://res.cloudinary.com/clutchaf/image/upload/v1654797050/Video%20Library/dean-bennett-nFjLHE4vmn4-unsplash_azbusa.webp"
              alt="hero"
              className="object-center lg:h-[28rem] xl:h-[36rem] w-full object-cover "
              onLoad={() => setImageLoader(false)}
            />
          </figure>
          <div
            className={`${
              imageLoader
                ? `hidden`
                : ` absolute flex flex-col gap-4 items-center justify-center w-full h-full top-0 left-0 bg-black/30`
            }`}>
            <h1 className="text-3xl text-white md:text-5xl lg:text-7xl underline underline-offset-4">
              Clutch VODS
            </h1>
            <p className="text-md text-white sm:text-xl lg:text-2xl font-semibold">
              A Video Library for NBA Fans
            </p>
          </div>
        </div>
      </div>
      <h2 className="my-3 text-xl sm:text-2xl md:text-3xl font-semibold py-2 text-center underline underline-offset-4 decoration-blue-400">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 h-full">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export { Home };
