import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { MdPlaylistAdd, MdWatchLater, MdCheckCircle } from "react-icons/md";
import {
  addHistory,
  addLiked,
  addWatchLater,
  deleteLiked,
  deleteWatchLater,
} from "../../actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { openModal } from "../../features/modalSlice";
import { Modal } from "../";
import { PlaylistForm } from "../";

const VideoPlayer = () => {
  const [like, setLike] = useState(false);
  const [inWatchLater, setInWatchLater] = useState(false);
  const { userToken } = useSelector((store) => store.auth);
  const { currentVideo, likedVideos, watchLater } = useSelector(
    (store) => store.video
  );
  const { videoURL, title, channelImage, creator, description } = currentVideo;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVideoLiked = (currentVideo, likedVideos) => {
    return likedVideos.some((video) => video._id === currentVideo._id);
  };
  const isVideoInWatchLater = (currentVideo, watchLater) => {
    return watchLater.some((video) => video._id === currentVideo._id);
  };
  const handleLike = () => {
    like
      ? dispatch(deleteLiked(currentVideo._id))
      : userToken
      ? dispatch(addLiked(currentVideo))
      : navigate("/login", { replace: true });
  };
  const handleWatchLater = () => {
    inWatchLater
      ? dispatch(deleteWatchLater(currentVideo._id))
      : userToken
      ? dispatch(addWatchLater(currentVideo))
      : navigate("/login", { replace: true });
  };
  const handlePlaylist = () =>
    userToken ? dispatch(openModal()) : navigate("/login", { replace: true });

  useEffect(() => {
    setLike(isVideoLiked(currentVideo, likedVideos));
  }, [likedVideos, currentVideo]);
  useEffect(() => {
    setInWatchLater(isVideoInWatchLater(currentVideo, watchLater));
  }, [watchLater, currentVideo]);

  useEffect(() => {
    if (Object.keys(currentVideo).length !== 0) {
      dispatch(addHistory(currentVideo));
    }
    // eslint-disable-next-line
  }, [currentVideo]);
  //   console.log("like:", like, currentVideo, likedVideos);
  return (
    <article className="box-shadow--theme flex flex-col gap-5 p-3 h-[24rem] w-full sm:h-[34rem] md:h-[36rem] lg:h-[48rem]">
      <ReactPlayer
        width="100%"
        className="box-shadow--theme"
        height="100%"
        playing={true}
        url={videoURL}
        controls={true}
      />
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl">{title}</h1>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        <div className="flex justify-start w-full items-center gap-2">
          <figure className="w-10 md:w-12 border h-full rounded-full flex-initial shrink-0 overflow-hidden ">
            <img src={channelImage} alt="channel-logo" />
          </figure>
          <h2 className="text-md md:text-xl font-semibold text-green-600">
            {creator}
            <i className="ml-2 fa-solid fa-circle-check"></i>
          </h2>
        </div>
        <div className="cta justify-end w-full flex gap-3 items-cente">
          <button onClick={handleLike} className="text-xl md:text-2xl">
            <i
              className={`${
                like && `text-green-500`
              } fa-solid fa-thumbs-up`}></i>
          </button>
          <button onClick={handlePlaylist} className="text-3xl md:text-4xl">
            {<MdPlaylistAdd />}
          </button>
          <Modal>
            <PlaylistForm />
          </Modal>
          <button
            onClick={handleWatchLater}
            className={`text-2xl md:text-3xl gap-1 flex items-center px-3 py-2 ${
              inWatchLater && `bg-green-500`
            } bg-darkGrayishBlue rounded-md`}>
            {inWatchLater ? <MdCheckCircle /> : <MdWatchLater />}
            <span className="text-base md:text-xl">
              {inWatchLater ? `Added` : `Watch Later`}
            </span>
          </button>
        </div>
      </div>
      <p className="text-sm md:text-base hidden sm:block">{description}</p>
    </article>
  );
};

export { VideoPlayer };
