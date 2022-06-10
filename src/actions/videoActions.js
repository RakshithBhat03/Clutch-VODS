import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllVideos = createAsyncThunk(
  "video/getAllVideos",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/videos");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getVideoById = createAsyncThunk(
  "video/getVideoById",
  async (videoId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/video/${videoId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addLiked = createAsyncThunk(
  "video/addLiked",
  async (video, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getLiked = createAsyncThunk(
  "video/getLiked",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteLiked = createAsyncThunk(
  "video/deleteLiked",
  async (videoId, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getHistory = createAsyncThunk(
  "video/getHistory",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get("/api/user/history", {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {}
  }
);
export const addHistory = createAsyncThunk(
  "video/addHistory",
  async (video, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {}
  }
);
export const deleteHistory = createAsyncThunk(
  "video/deleteHistory",
  async (videoId, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {}
  }
);
export const getWatchLater = createAsyncThunk(
  "video/getWatchLater",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {}
  }
);
export const addWatchLater = createAsyncThunk(
  "video/addWatchLater",
  async (video, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {}
  }
);
export const deleteWatchLater = createAsyncThunk(
  "video/deleteWatchLater",
  async (videoId, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {}
  }
);
export const addToPlaylist = createAsyncThunk(
  "video/addToPlaylist",
  async (playlist, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {}
  }
);
export const getAllPlaylists = createAsyncThunk(
  "video/getAllPlaylists",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: userToken,
        },
      });
      return response.data;
    } catch (error) {}
  }
);
export const deletePlaylist = createAsyncThunk(
  "video/deletePlaylist",
  async (playlistId, thunkAPI) => {
    console.log("playlistId:", playlistId);
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: userToken,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addVideoToPlaylist = createAsyncThunk(
  "video/addVideoToPlaylist",
  async ({ video, playlistId }, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {}
  }
);
export const deleteVideoFromPlaylist = createAsyncThunk(
  "video/deleteVideoFromPlaylist",
  async ({ playlistId, videoId }, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {}
  }
);
export const getAllVideosFromPlaylist = createAsyncThunk(
  "video/getAllVideosFromPlaylist",
  async (playlistId, thunkAPI) => {
    console.log(playlistId);
    const {
      auth: { userToken },
    } = thunkAPI.getState();
    try {
      const response = await axios.get(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: userToken,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {}
  }
);
export const getCategories = createAsyncThunk(
  "video/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/categories`);
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error);
    }
  }
);
