import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addVideoToPlaylist, deleteVideoFromPlaylist } from "../../actions";

const AddPlaylistCheckBox = ({
  playlist: { title, _id, videos },
  currentVideo,
}) => {
  const isMounted = useRef(false);
  const checkIfExistsInPlaylist = (id, videos) =>
    videos.some(({ _id }) => _id === id);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleChecked = () => setChecked((checked) => !checked);

  useEffect(() => {
    setChecked(checkIfExistsInPlaylist(currentVideo._id, videos));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    isMounted.current
      ? checked
        ? dispatch(addVideoToPlaylist({ video: currentVideo, playlistId: _id }))
        : dispatch(
            deleteVideoFromPlaylist({
              videoId: currentVideo._id,
              playlistId: _id,
            })
          )
      : (isMounted.current = true);

    // eslint-disable-next-line
  }, [checked]);

  return (
    <label className="text-2xl">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
        value={checked}
      />{" "}
      {title}
    </label>
  );
};

export { AddPlaylistCheckBox };
