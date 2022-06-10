import { Routes, Route } from "react-router-dom";
import { SplashScreen } from "../components";
import { RequireAuth } from "./RequireAuth";
import {
  Explore,
  History,
  Home,
  LikedVideos,
  Login,
  Playlist,
  WatchLater,
} from "../pages";
import { Signup } from "../pages/Signup/Signup";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />

      <Route element={<RequireAuth isLoggedIn />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
      </Route>
      <Route
        path="*"
        element={<SplashScreen text="Looks like you're lost" notFound={true} />}
      />
    </Routes>
  );
};
