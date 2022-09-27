import { useState } from "react";
import { AddTaskModal } from "./modal/AddTaskModal";

export const AddTaskButton = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setShow(!show);
  };

  if (show === true) {
    return <AddTaskModal setShow={setShow} />;
  } else {
    return (
      <button
        onClick={handleClick}
        className="sticky bg-green-300 hover:bg-green-500 text-green-300-contrast my-auto py-3 px-3 hover:text-greaan-500-contrast rounded-md hover:rounded-xl
        transition-all duration-200 ease-linear
        cursor-pointer shadow-lg underline underline-offset-2 decoration-from-font"
      >
        Add Task
      </button>
    );
  }
};
