import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, SplashScreen } from "../../components";
import { getLiked } from "../../actions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function LikedVideos() {
  const { likedVideos } = useSelector((store) => store.video);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLiked());
    // eslint-disable-next-line
  }, []);
  useDocumentTitle("Liked Videos | Clutch VODS");
  return likedVideos.length !== 0 ? (
    <div className="flex-1 ml-20 md:ml-0 p-1 ">
      <h2 className="sm:text-3xl text-2xl my-2 font-semibold text-center underline underline-offset-4 decoration-blue-400">
        Liked Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {likedVideos.map((video) => (
          <Card key={video._id} video={video} deleteBtn liked />
        ))}
      </div>
    </div>
  ) : (
    <SplashScreen text="Looks like you have no liked videos" />
  );
}

export { LikedVideos };
