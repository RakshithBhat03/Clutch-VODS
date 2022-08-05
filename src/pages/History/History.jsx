import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, SplashScreen } from "../../components";
import { clearHistory, getHistory } from "../../actions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { MdDelete } from "react-icons/md";

function History() {
  const { history } = useSelector((store) => store.video);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistory());
    // eslint-disable-next-line
  }, []);
  useDocumentTitle("History | Clutch VODS");
  return history.length !== 0 ? (
    <div className="flex-1 ml-20 md:ml-0 p-1">
      <div className="w-full flex my-2 justify-center relative ">
        <h2 className="sm:text-3xl text-2xl font-semibold underline underline-offset-4 decoration-blue-400">
          Your History
        </h2>
        <button
          onClick={() => dispatch(clearHistory())}
          className=" absolute top-0 right-0 md:right-12 py-1 ml-1 px-2 bg-rose-500 text-white rounded-md">
          <span className="hidden sm:block">Clear History</span>
          <MdDelete className="sm:hidden block text-2xl" />
        </button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {history.map((video) => (
          <Card key={video._id} video={video} deleteBtn history />
        ))}
      </div>
    </div>
  ) : (
    <SplashScreen text="Looks like you have not watched any videos" />
  );
}

export { History };
