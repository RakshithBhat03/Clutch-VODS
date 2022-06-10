import { Navbar, SideBar } from "./components";
import { AllRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTheme } from "./features/themeSlice";

function App() {
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTheme());
    // eslint-disable-next-line
  }, []);
  return (
    <div className={`${theme === "dark" ? `dark` : `bg-white`}`}>
      <div className="app-wrapper gap-1">
        <Navbar />
        <main className="bg-inherit gap-2 flex flex-grow dark:text-white dark:bg-gray-900 transition-colors duration-300 relative">
          <SideBar />
          <AllRoutes />
          <ToastContainer />
        </main>
      </div>
    </div>
  );
}

export default App;
