import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import { SplashScreen } from "../SplashScreen/SplashScreen";

const SinglePlaylist = () => {
  const { id } = useParams();
  const { playlists } = useSelector((store) => store.video);
  const getPlaylist = (playlists, id) =>
    playlists.find(({ _id }) => _id === id);
  const currentPlaylist = getPlaylist(playlists, id);

  return currentPlaylist?.videos?.length > 0 ? (
    <div className="flex-1 ml-20 md:ml-0 p-1">
      <div className="box-shadow--theme grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {currentPlaylist.videos.map((video, index) => (
          <Card video={video} key={index} deleteBtn playlistVideo />
        ))}
      </div>
    </div>
  ) : (
    <SplashScreen text="Looks like you have no videos added to playlist" />
  );
};

export { SinglePlaylist };
