import { createSlice } from "@reduxjs/toolkit";
import {
  addHistory,
  addLiked,
  addToPlaylist,
  addVideoToPlaylist,
  addWatchLater,
  clearHistory,
  deleteHistory,
  deleteLiked,
  deletePlaylist,
  deleteVideoFromPlaylist,
  deleteWatchLater,
  getAllPlaylists,
  getAllVideos,
  getAllVideosFromPlaylist,
  getCategories,
  getHistory,
  getLiked,
  getVideoById,
  getWatchLater,
} from "../actions";
import { ShowToast } from "../components";
const initialState = {
  allVideos: [],
  currentVideo: {},
  categories: [],
  likedVideos: [],
  watchLater: [],
  history: [],
  playlists: [],
  filteredVideos: [],
  isLoading: true,
  error: false,
  filter: false,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    clearCurrentVideo: (state) => {
      return (state = { ...state, currentVideo: {} });
    },
    filteredVideosByCategory: (state, action) => {
      state.filter = action.payload;
      state.filteredVideos = state.allVideos.filter(
        ({ categoryName }) => categoryName === action.payload
      );
    },
    resetFilter: (state) => {
      state.filter = false;
      state.filteredVideos = [];
    },
    clearVideoState: (state) => {
      const allVideos = state.allVideos;
      return (state = { ...initialState, allVideos });
    },
  },
  extraReducers: {
    [getAllVideos.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getAllVideos.fulfilled]: (state, action) => {
      state.allVideos = action.payload.videos;
      state.isLoading = false;
      state.error = false;
    },
    [getAllVideos.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getVideoById.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getVideoById.fulfilled]: (state, action) => {
      state.currentVideo = action.payload.video;
      state.isLoading = false;
      state.error = false;
    },
    [getVideoById.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [addLiked.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [addLiked.fulfilled]: (state, action) => {
      state.likedVideos = action.payload.likes;
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `Added to Liked Videos`,
      });
    },
    [addLiked.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getLiked.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getLiked.fulfilled]: (state, action) => {
      state.likedVideos = action.payload.likes;
      state.isLoading = false;
      state.error = false;
    },
    [getLiked.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [deleteLiked.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [deleteLiked.fulfilled]: (state, action) => {
      ShowToast({
        type: "success",
        message: `Removed from Liked Videos`,
      });
      state.likedVideos = action.payload.likes;
      state.isLoading = false;
      state.error = false;
    },
    [deleteLiked.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getHistory.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getHistory.fulfilled]: (state, action) => {
      state.history = action.payload.history;
      state.isLoading = false;
      state.error = false;
    },
    [getHistory.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [addHistory.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [addHistory.fulfilled]: (state, action) => {
      state.history = action.payload.history;
      state.isLoading = false;
      state.error = false;
    },
    [addHistory.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [deleteHistory.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [deleteHistory.fulfilled]: (state, action) => {
      state.history = action.payload.history;
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `Video deleted from history!`,
      });
    },
    [deleteHistory.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [clearHistory.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [clearHistory.fulfilled]: (state, action) => {
      state.history = action.payload.history;
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `History Cleared!`,
      });
    },
    [clearHistory.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getWatchLater.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload.watchlater;
      state.isLoading = false;
      state.error = false;
    },
    [getWatchLater.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [addWatchLater.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [addWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload.watchlater;
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `Added to Watch later`,
      });
    },
    [addWatchLater.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [deleteWatchLater.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [deleteWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload.watchlater;
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `Removed from Watch later`,
      });
    },
    [deleteWatchLater.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getAllPlaylists.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getAllPlaylists.fulfilled]: (state, action) => {
      state.playlists = action?.payload?.playlists ?? [];
      state.isLoading = false;
      state.error = false;
    },
    [getAllPlaylists.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [addToPlaylist.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [addToPlaylist.fulfilled]: (state, action) => {
      if (!action?.payload?.playlists)
        ShowToast({
          type: "warning",
          message: `Something went wrong`,
        });
      else {
        state.playlists = action?.payload?.playlists ?? [];
        state.isLoading = false;
        state.error = false;
        ShowToast({
          type: "success",
          message: `Playlist Created`,
        });
      }
    },
    [addToPlaylist.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [deletePlaylist.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [deletePlaylist.fulfilled]: (state, action) => {
      state.playlists = action.payload.playlists;
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `Playlist Deleted`,
      });
    },
    [deletePlaylist.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [addVideoToPlaylist.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [addVideoToPlaylist.fulfilled]: (state, action) => {
      state.playlists = state.playlists.map((video) =>
        video._id === action.payload.playlist._id
          ? { ...video, videos: action.payload.playlist.videos }
          : video
      );
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `Added to playlist`,
      });
    },
    [addVideoToPlaylist.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [deleteVideoFromPlaylist.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [deleteVideoFromPlaylist.fulfilled]: (state, action) => {
      state.playlists = state.playlists.map((video) =>
        video._id === action.payload.playlist._id
          ? { ...video, videos: action.payload.playlist.videos }
          : video
      );
      state.isLoading = false;
      state.error = false;
      ShowToast({
        type: "success",
        message: `Deleted from playlist`,
      });
    },
    [deleteVideoFromPlaylist.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getAllVideosFromPlaylist.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getAllVideosFromPlaylist.fulfilled]: (state, action) => {
      state.playlists = state.playlists.map((video) =>
        video._id === action.payload.playlist._id
          ? { ...video, videos: action.payload.playlist.videos }
          : video
      );
      state.isLoading = false;
      state.error = false;
    },
    [getAllVideosFromPlaylist.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getCategories.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload.categories;
      state.isLoading = false;
      state.error = false;
    },
    [getCategories.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});
export const {
  clearCurrentVideo,
  filteredVideosByCategory,
  resetFilter,
  clearVideoState,
} = videoSlice.actions;
export default videoSlice.reducer;
