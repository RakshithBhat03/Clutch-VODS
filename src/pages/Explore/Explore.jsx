import { Card } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions";
import {
  filteredVideosByCategory,
  resetFilter,
} from "../../features/videoSlice";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
function Explore() {
  const { allVideos, categories, filter, filteredVideos } = useSelector(
    (store) => store.video
  );
  const dispatch = useDispatch();
  const showVideos = filteredVideos.length > 0 ? filteredVideos : allVideos;
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);
  useDocumentTitle("Explore | Clutch VODS");
  return (
    <div className="flex-1 ml-20 md:ml-0 p-1">
      <div className="p-2 mb-2 flex flex-wrap lg:flex-nowrap gap-2 text-sm md:text-md lg:text-base md:gap-3 lg:gap-5">
        <button
          onClick={() => dispatch(resetFilter())}
          className={`${
            !filter
              ? `bg-brightRed dark:bg-brightRed text-white`
              : `dark:bg-gray-700`
          } px-4 md:px-6 py-2 rounded-full bg-inherit  border border-color-gray-white dark:border-color-black`}>
          All
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() =>
              dispatch(filteredVideosByCategory(category.categoryName))
            }
            className={`${
              category.categoryName === filter
                ? `bg-brightRed dark:bg-brightRed text-white`
                : `dark:bg-gray-700`
            } px-4 md:px-6 py-2 rounded-full bg-inherit border border-color-gray-white dark:border-color-black`}>
            {category.categoryName}
          </button>
        ))}
        <button
          onClick={() => dispatch(resetFilter())}
          className=" py-1 px-3 bg-rose-500 rounded-md text-white">
          Reset
        </button>
      </div>
      <div className="box-shadow--theme grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {showVideos.map((video) => (
          <Card key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export { Explore };
