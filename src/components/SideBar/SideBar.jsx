import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../../features/mobileMenu";

function SideBar() {
  const mobileMenu = useSelector((store) => store.mobileMenu);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        !mobileMenu && `w-64`
      } z-10 absolute md:relative h-full bg-inherit md:w-64 flex-initial box-shadow--theme transition-width duration-1000`}>
      <Link
        onClick={() => dispatch(closeMenu())}
        to="/"
        className="button--sidebar box-shadow--theme">
        <i className="fa-solid text-xl fa-house"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Home
        </span>
      </Link>
      <Link
        onClick={() => dispatch(closeMenu())}
        to="/explore"
        className="button--sidebar box-shadow--theme ">
        <i className="fa-brands text-xl fa-youtube"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Explore
        </span>
      </Link>

      <Link
        onClick={() => dispatch(closeMenu())}
        to="/watch-later"
        className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-clock"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Watch Later
        </span>
      </Link>
      <Link
        onClick={() => dispatch(closeMenu())}
        to="/liked-videos"
        className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-thumbs-up"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Liked Videos
        </span>
      </Link>
      <Link
        onClick={() => dispatch(closeMenu())}
        to="/history"
        className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-clock-rotate-left"></i>
        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          History
        </span>
      </Link>
      <Link
        onClick={() => dispatch(closeMenu())}
        to="/playlist"
        className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-file-video"></i>

        <span
          className={`${mobileMenu ? `hidden` : `block`} md:text-xl md:block`}>
          Playlists
        </span>
      </Link>
    </div>
  );
}

export { SideBar };
