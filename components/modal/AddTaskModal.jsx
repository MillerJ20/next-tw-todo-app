import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../utils/async.js";
import { useState } from "react";

export const AddTaskModal = ({ setShow }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(uuidv4(), taskText);
    setShow(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setTaskText(value);
  };

  const handleClick = (e) => {
    setShow(false);
  };

  return (
    <div className="flex flex-row w-fit border rounded-md bg-slate-200 shadow-lg py-2 px-2">
      <div className="my-auto px-2">Enter new task text: </div>
      <form className="my-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskText"
          value={taskText}
          onChange={handleChange}
          className="bg-gray-300 py-2 text-md"
        />
      </form>
      <button
        className="my-auto px-2 py-2 mx-2 bg-red-200 hover:bg-red-500
      text-black hover:text-white transition-all duration-200 ease-linear
      cursor-pointer shadow-lg rounded-md hove:rounded-xl"
        onClick={handleClick}
      >
        CLOSE
      </button>
      <button
        className="my-auto px-2 py-2 mr-2 bg-green-200 hover:bg-green-500
      text-black hover:text-white transition-all duration-200 ease-linear
      cursor-pointer shadow-lg rounded-md hove:rounded-xl"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
};
