const CategoryCard = () => {
  return (
    <div className="relative box-shadow--theme p-2 hover:cursor-pointer hover:shadow-slate-400 relative">
      <figure>
        <img
          src="https://res.cloudinary.com/clutchaf/image/upload/v1654842247/Video%20Library/undraw_video_files_fu10_xprk5t.svg"
          alt="category"
          className="w-full h-56 sm:h-auto"
        />
      </figure>
      <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 bg-black/50 hover:bg-transparent hover:font-semibold">
        <h3 className="text-xl text-white sm:text-2xl md:text-3xl underline underline-offset-4">
          Category
        </h3>
      </div>
    </div>
  );
};

export { CategoryCard };
