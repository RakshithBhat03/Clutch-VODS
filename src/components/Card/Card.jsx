import { MdDelete } from "react-icons/md";
function Card({
  video,
  deleteBtn = false,
  liked = false,
  history = false,
  watchLater = false,
  playlistVideo = false,
}) {
  return (
    <div className="box-shadow--theme p-2 hover:cursor-pointer hover:shadow-slate-400 relative">
      <figure className="mb-3">
        <img
          src="https://res.cloudinary.com/clutchaf/image/upload/v1654842247/Video%20Library/undraw_video_files_fu10_xprk5t.svg"
          alt="thumbnail"
          className="w-32 h32"
        />
      </figure>
      <div className="w-full mt-2 flex gap-2 px-2">
        <figure className="w-12 border h-full rounded-full flex-initial shrink-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/clutchaf/image/upload/v1654842247/Video%20Library/undraw_video_files_fu10_xprk5t.svg"
            alt="channel-logo"
          />
        </figure>
        <div className="flex flex-col mb-2">
          <h2 className="text-sm sm:text-md md:text-base">Video Title</h2>
          <h3 className="text-md font-semibold text-green-600">
            Channel Name
            <i className="ml-2 fa-solid fa-circle-check"></i>
          </h3>
        </div>
      </div>
      {deleteBtn && (
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-5 right-5 text-2xl text-rose-500 p-2 rounded-full bg-black/20 dark:bg-white/50">
          <MdDelete />
        </button>
      )}
    </div>
  );
}

export { Card };
