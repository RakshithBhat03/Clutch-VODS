import { useNavigate } from "react-router-dom";

function SplashScreen({ text, notFound }) {
  const navigate = useNavigate();
  return (
    <main className="flex-1 ml-20 md:ml-0 flex flex-col items-center justify-center gap-8">
      <figure className="w-64 md:w-96">
        <img
          src={`${
            notFound
              ? `https://res.cloudinary.com/clutchaf/image/upload/v1654842246/Video%20Library/undraw_page_not_found_re_e9o6_qq07eg.svg`
              : `https://res.cloudinary.com/clutchaf/image/upload/v1654842247/Video%20Library/undraw_video_files_fu10_xprk5t.svg`
          }`}
          alt="splash-screen"
        />
      </figure>
      <h1 className="text-2xl md:text-3xl text-center">{text}</h1>
      <button
        onClick={() => navigate("/")}
        className="text-lg md:text-2xl px-6 py-3 bg-darkGrayishBlue rounded-full">
        Browse Videos
      </button>
    </main>
  );
}

export { SplashScreen };
