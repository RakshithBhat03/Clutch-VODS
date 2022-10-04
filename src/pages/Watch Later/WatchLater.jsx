import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, SplashScreen } from "../../components";
import { getWatchLater } from "../../actions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
function WatchLater() {
  const { watchLater } = useSelector((store) => store.video);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchLater());
    // eslint-disable-next-line
  }, []);
  useDocumentTitle("Watch Later | Clutch VODS");
  return watchLater.length !== 0 ? (
    <div className="flex-1 ml-20 md:ml-0 p-1">
      <h2 className="sm:text-3xl text-2xl my-2 font-semibold text-center underline underline-offset-4 decoration-blue-400">
        Watch Later
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {watchLater.map((video) => (
          <Card key={video._id} video={video} deleteBtn watchLater />
        ))}
      </div>
    </div>
  ) : (
    <SplashScreen text="Looks like you have no videos added to watch later" />
  );
}

export { WatchLater };
