import { MdModeEditOutline } from "react-icons/md";
import { editTask } from "../utils/async.js";

export const EditButton = ({ id, setInputFocus }) => {
  const clickHandler = async (e) => {
    e.preventDefault();
    setInputFocus();
  };

  return (
    <button
      className="grow-0 relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2  
    bg-blue-300 hover:bg-blue-500
    text-blue-300-contrast hover:text-blue-500-contrast
    hover:rounded-xl rounded-3xl
    transition-all duration-200 ease-linear
    cursor-pointer shadow-lg basis-1/7 group"
      onClick={clickHandler}
    >
      {<MdModeEditOutline />}
      <span
        className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
    text-white bg-gray-900 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-left group-hover:scale-100"
      >
        Edit Task
      </span>
    </button>
  );
};
