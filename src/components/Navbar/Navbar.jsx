import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/authSlice";
import { toggleMenu } from "../../features/mobileMenu";
import { toggleTheme } from "../../features/themeSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken } = useSelector((store) => store.auth);
  const SideBarHandler = () => dispatch(toggleMenu());
  const themeHandler = () => dispatch(toggleTheme());
  const handleAuth = () => {
    if (userToken) {
      dispatch(logoutUser());
      navigate("/explore");
    } else navigate("/login");
  };
  return (
    <nav className="relative w-full mx-auto p-6 box-shadow--theme ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <button onClick={SideBarHandler} className="md:hidden">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/clutchaf/image/upload/v1659726264/Video%20Library/logo_rysrqp.png"
              alt=""
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-2xl ml-2">VODS</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleAuth}
            className="py-2 px-4 sm:px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight cursor-pointer">
            {userToken ? `Logout` : `Login`}
          </button>
          <button onClick={themeHandler} className="px-3 py-2">
            <i className="fa-solid fa-moon text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
