import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoById } from "../../actions";
import { useEffect } from "react";
import { RelatedVideos, VideoPlayer } from "../../components";
import { clearCurrentVideo } from "../../features/videoSlice";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
const Watch = () => {
  const { id: videoId } = useParams();
  const dispatch = useDispatch();
  const { currentVideo } = useSelector((store) => store.video);

  useEffect(() => {
    dispatch(getVideoById(videoId));
    return () => dispatch(clearCurrentVideo());
    // eslint-disable-next-line
  }, [videoId]);
  useDocumentTitle(`${currentVideo.title}`);
  return (
    <div className="box-shadow--theme flex flex-col lg:flex-row flex-1 gap-3 ml-20 md:ml-0 p-1">
      <Helmet>
        <title>{`${currentVideo.title}`}</title>
      </Helmet>
      <VideoPlayer />
      <RelatedVideos currentVideo={currentVideo} />
    </div>
  );
};

export { Watch };
