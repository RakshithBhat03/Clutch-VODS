import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaylistCard, SplashScreen } from "../../components/";
import { getAllPlaylists } from "../../actions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function Playlist() {
  const { playlists } = useSelector((store) => store.video);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPlaylists());
    // eslint-disable-next-line
  }, []);
  useDocumentTitle("Playlist | Clutch VODS");
  return playlists.length !== 0 ? (
    <div className="flex-1 ml-20 md:ml-0 p-1">
      <h2 className="sm:text-3xl text-2xl my-2 font-semibold text-center underline underline-offset-4 decoration-blue-400">
        Your Playlists
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {playlists.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist._id} />
        ))}
      </div>
    </div>
  ) : (
    <SplashScreen text="Looks like you have no videos added to playlist" />
  );
}

export { Playlist };
