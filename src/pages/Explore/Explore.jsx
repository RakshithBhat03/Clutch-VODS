import { Card } from "../../components";
function Explore() {
  return (
    <div className="flex-1 ml-20 md:ml-0 p-1">
      <div className="p-2 flex flex-wrap lg:flex-nowrap gap-2 text-sm md:text-md lg:text-base md:gap-3 lg:gap-5">
        <button
          className={` px-4 md:px-6 py-2 rounded-full bg-inherit  border border-color-gray-white dark:border-color-black`}>
          All
        </button>
        {[...Array(4)].map((_, index) => (
          <button
            key={index}
            className={`px-4 md:px-6 py-2 rounded-full bg-inherit border border-color-gray-white dark:border-color-black`}>
            {`Category ${index}`}
          </button>
        ))}
        <button className=" py-1 px-3 bg-rose-500 rounded-md">Reset</button>
      </div>
      <div className="box-shadow--theme grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {[...Array(20)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export { Explore };
