import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeMenu } from "../../features/mobileMenu";

function SideBar() {
  const mobileMenu = useSelector((store) => store.mobileMenu);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        !mobileMenu && `w-64`
      } z-10 absolute md:relative h-full bg-inherit md:w-64 flex-initial box-shadow--theme transition-width duration-1000`}>
      <NavLink
        onClick={() => dispatch(closeMenu())}
        to="/"
        className={({ isActive }) =>
          isActive
            ? `button--sidebar box-shadow--theme bg-brightRed text-white`
            : `button--sidebar box-shadow--theme`
        }>
        <i className="fa-solid text-xl fa-house"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Home
        </span>
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeMenu())}
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? `button--sidebar box-shadow--theme bg-brightRed text-white`
            : `button--sidebar box-shadow--theme`
        }>
        <i className="fa-brands text-xl fa-youtube"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Explore
        </span>
      </NavLink>

      <NavLink
        onClick={() => dispatch(closeMenu())}
        to="/watch-later"
        className={({ isActive }) =>
          isActive
            ? `button--sidebar box-shadow--theme bg-brightRed text-white`
            : `button--sidebar box-shadow--theme`
        }>
        <i className="fa-solid text-xl fa-clock"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Watch Later
        </span>
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeMenu())}
        to="/liked-videos"
        className={({ isActive }) =>
          isActive
            ? `button--sidebar box-shadow--theme bg-brightRed text-white`
            : `button--sidebar box-shadow--theme`
        }>
        <i className="fa-solid text-xl fa-thumbs-up"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Liked Videos
        </span>
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeMenu())}
        to="/history"
        className={({ isActive }) =>
          isActive
            ? `button--sidebar box-shadow--theme bg-brightRed text-white`
            : `button--sidebar box-shadow--theme`
        }>
        <i className="fa-solid text-xl fa-clock-rotate-left"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          History
        </span>
      </NavLink>
      <NavLink
        onClick={() => dispatch(closeMenu())}
        to="/playlist"
        className={({ isActive }) =>
          isActive
            ? `button--sidebar box-shadow--theme bg-brightRed text-white`
            : `button--sidebar box-shadow--theme`
        }>
        <i className="fa-solid text-xl fa-file-video"></i>

        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Playlists
        </span>
      </NavLink>
    </div>
  );
}

export { SideBar };
