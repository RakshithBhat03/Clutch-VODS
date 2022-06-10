import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, SplashScreen } from "../../components";
import { getHistory } from "../../actions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

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
      <div className="box-shadow--theme grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
