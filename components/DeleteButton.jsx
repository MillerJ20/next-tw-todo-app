import { MdDeleteOutline } from "react-icons/md";
import { deleteTask } from "../utils/async";

export const DeleteButton = ({ id }) => {
  const clickHandler = async (e) => {
    e.preventDefault();

    await deleteTask(id);
  };

  return (
    <button
      className="relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto  
    bg-red-200 hover:bg-red-400
    text-gray-500 hover:text-white
    hover:rounded-xl rounded-3xl
    transition-all duration-200 ease-linear
    cursor-pointer shadow-lg basis-1/7 group"
      onClick={clickHandler}
    >
      {<MdDeleteOutline />}
      <span
        className="absolute w-auto p-2 min-w-max left-14 rounded-md shadow-md
    text-white bg-gray-900 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-left group-hover:scale-100 m-14"
      >
        Delete Task
      </span>
    </button>
  );
};
