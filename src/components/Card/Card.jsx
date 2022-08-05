import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteHistory,
  deleteLiked,
  deleteVideoFromPlaylist,
  deleteWatchLater,
} from "../../actions";
import { GrowLoader } from "../Loaders";
function Card({
  video,
  deleteBtn = false,
  liked = false,
  history = false,
  watchLater = false,
  playlistVideo = false,
}) {
  const { id } = useParams();
  const [imageLoader, setImageLoader] = useState(true);
  const { _id, title, thumbnail, creator, channelImage } = video;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => navigate(`/watch/${_id}`)}
      className={`${
        imageLoader && `h-56`
      } box-shadow--theme border dark:border-slate-600 p-2 hover:cursor-pointer hover:shadow-slate-400 relative `}>
      {imageLoader && <GrowLoader width="w-12" height="h-12" />}
      <figure className={`${imageLoader ? `hidden` : `mb-3`}`}>
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full"
          onLoad={() => setImageLoader(false)}
        />
      </figure>
      <div className="w-full mt-2 flex gap-2 px-2">
        {/* <div className="rounded-full w-18 h-12 border overflow-hidden"> */}
        <figure
          className={`${
            imageLoader
              ? `hidden`
              : `w-12 border h-full rounded-full flex-initial shrink-0 overflow-hidden`
          }`}>
          <img src={channelImage} alt="channel-logo" />
        </figure>
        {/* </div> */}
        {!imageLoader && (
          <div className="flex flex-col mb-2">
            <h2 className="text-sm sm:text-md md:text-base">{title}</h2>
            <h3 className="text-md font-semibold text-green-600">
              {creator}
              <i className="ml-2 fa-solid fa-circle-check"></i>
            </h3>
          </div>
        )}
      </div>
      {deleteBtn && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            liked && dispatch(deleteLiked(_id));
            history && dispatch(deleteHistory(_id));
            watchLater && dispatch(deleteWatchLater(_id));
            playlistVideo &&
              dispatch(
                deleteVideoFromPlaylist({ videoId: _id, playlistId: id })
              );
          }}
          className="absolute top-5 right-5 text-2xl text-rose-500 p-2 rounded-full bg-black/20 dark:bg-white/50">
          <MdDelete />
        </button>
      )}
    </div>
  );
}

export { Card };
