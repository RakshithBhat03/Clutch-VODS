import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addToPlaylist, getAllPlaylists } from "../../actions";
import { AddPlaylistCheckBox, FormError } from "../";
const PlaylistForm = () => {
  const dispatch = useDispatch();
  const { currentVideo, playlists } = useSelector((store) => store.video);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("This field is required"),
      description: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      dispatch(addToPlaylist(values));
      formik.resetForm({ title: "", description: "" });
    },
  });
  useEffect(() => {
    dispatch(getAllPlaylists());
    // eslint-disable-next-line
  }, []);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-1 justify-center">
      <h2 className="text-2xl font-semibold">Playlist</h2>
      {playlists.length > 0 &&
        playlists.map((playlist) => (
          <AddPlaylistCheckBox
            key={playlist._id}
            playlist={playlist}
            currentVideo={currentVideo}
          />
        ))}
      <label className="w-full mt-5">
        <input
          type="text"
          name="title"
          className={`${
            formik.errors.title && formik.touched.title
              ? `border-rose-500 dark:border-rose-500`
              : `border-gray-300`
          } text-base w-full bg-inherit sm:text-xl p-2 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
          placeholder="Playlist Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
      </label>
      {formik.errors.title && formik.touched.title && (
        <FormError>{formik.errors.title}</FormError>
      )}
      <label className="w-full mt-5">
        <input
          type="text"
          name="description"
          className={`${
            formik.errors.description && formik.touched.description
              ? `border-rose-500 dark:border-rose-500`
              : `border-gray-300`
          } text-base w-full bg-inherit sm:text-xl p-2 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
          placeholder="Description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
      </label>
      {formik.errors.description && formik.touched.description && (
        <FormError>{formik.errors.description}</FormError>
      )}
      <button
        type="submit"
        className="px-10 mt-5 text-base sm:text-xl py-2 w-full rounded-md text-white dark:text-inherit font-semibold bg-brightRed">
        Create Playlist
      </button>
    </form>
  );
};

export { PlaylistForm };
