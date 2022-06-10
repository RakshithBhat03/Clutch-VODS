import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="relative w-full mx-auto p-6 box-shadow--theme ">
      <div className="flex items-center justify-between">
        <div className="items-center space-x-5">
          <button className="md:hidden">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <Link to="/" className="text-xl">
            Clutch VODS
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="pt-2 pb-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight cursor-pointer">
            Login
          </button>
          <button className="px-3 py-2">
            <i className="fa-solid fa-moon text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
