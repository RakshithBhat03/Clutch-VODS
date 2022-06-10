import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modalSlice";
const Modal = ({ children }) => {
  const modal = useSelector((store) => store.modal);
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  if (!modal) return null;
  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => dispatch(closeModal())}
        className={`fixed top-0 right-0 left-0 right-0 bottom-0 z-20 bg-black/50`}
      />
      <div className={`${theme === "dark" ? `dark` : `bg-white`} w-full`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex flex-col fixed top-1/2 left-1/2 min-w-full min-h-64 sm:min-w-[16rem] md:min-w-[20rem] py-4 px-6 gap-4 bg-inherit dark:text-white dark:bg-gray-800 -translate-x-1/2 -translate-y-1/2 z-30 rounded-md`}>
          <button
            onClick={() => dispatch(closeModal())}
            className="text-3xl ml-auto absolute top-3 right-3">
            <MdClose />
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export { Modal };
