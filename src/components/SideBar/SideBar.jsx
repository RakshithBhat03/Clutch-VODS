import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div
      className={`z-10 absolute md:relative h-full bg-inherit md:w-64 flex-initial box-shadow--theme transition-width duration-1000`}>
      <Link to="/" className="button--sidebar box-shadow--theme">
        <i className="fa-solid text-xl fa-house"></i>
        <span className={`md:text-xl md:block`}>Home</span>
      </Link>
      <Link to="/explore" className="button--sidebar box-shadow--theme ">
        <i className="fa-brands text-xl fa-youtube"></i>
        <span className={`md:text-xl md:block`}>Explore</span>
      </Link>
      <Link to="/watch-later" className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-clock"></i>
        <span className={`md:text-xl md:block`}>Watch Later</span>
      </Link>
      <Link to="/liked-videos" className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-thumbs-up"></i>
        <span className={`md:text-xl md:block`}>Liked Videos</span>
      </Link>
      <Link to="/history" className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-clock-rotate-left"></i>
        <span className={` md:text-xl md:block`}>History</span>
      </Link>
      <Link to="/playlist" className="button--sidebar box-shadow--theme ">
        <i className="fa-solid text-xl fa-file-video"></i>
        <span className={` md:text-xl md:block`}>Playlists</span>
      </Link>
    </div>
  );
}

export { SideBar };
