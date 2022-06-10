import { Navbar, SideBar } from "./components";
import { AllRoutes } from "./routes";

function App() {
  return (
    <div className={`bg-white`}>
      <div className="app-wrapper gap-1">
        <Navbar />
        <main className="bg-inherit gap-2 flex flex-grow dark:text-white dark:bg-gray-900 transition-colors duration-300 relative">
          <SideBar />
          <AllRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
