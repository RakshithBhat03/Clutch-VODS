import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deletePlaylist } from "../../actions";
import { useDispatch } from "react-redux";
function PlaylistCard({ playlist }) {
  const { _id, title, videos } = playlist;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => navigate(`/playlist/${_id}`)}
      className="box-shadow--theme hover:cursor-pointer hover:shadow-slate-400 relative">
      <figure className="mb-3 p-2 ">
        <img
          src={
            videos.length === 0
              ? `https://res.cloudinary.com/clutchaf/image/upload/v1654842247/Video%20Library/undraw_video_files_fu10_xprk5t.svg`
              : `${videos[0].thumbnail}`
          }
          alt="thumbnail"
          className="w-full"
        />
      </figure>
      <div className="w-full mt-2 flex gap-2 px-2">
        <div className="flex flex-col mb-2">
          <h2 className="text-sm sm:text-md md:text-xl font-semibold">
            {title}
          </h2>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deletePlaylist(_id));
        }}
        className="absolute top-5 right-5 text-2xl text-rose-500 text-center p-2 rounded-full bg-black/20 dark:bg-white/50">
        <MdDelete />
      </button>
    </div>
  );
}

export { PlaylistCard };
