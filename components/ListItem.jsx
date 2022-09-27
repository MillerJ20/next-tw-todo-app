import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import { useState } from "react";
import { editTask } from "../utils/async.js";
import { useFocus } from "../utils/hooks.js";

export const ListItem = ({ text, id }) => {
  const [formText, setFormText] = useState(text);
  const [inputRef, setInputFocus] = useFocus();

  const handleChange = (e) => {
    const { value } = e.target;

    setFormText(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.lastChild.blur();
  };

  const handleBlur = async (e) => {
    await editTask(id, formText);
  };

  return (
    <div className="flex flex-row w-fit border rounded-md mx-2 my-2 bg-gray-200 pr-2 shadow-lg">
      <form className="my-auto mx-2 overflow-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskText"
          value={formText}
          onChange={handleChange}
          ref={inputRef}
          onBlur={handleBlur}
          className="bg-transparent py-2 text-md overflow-auto"
        />
      </form>
      <DeleteButton id={id} />
      <EditButton id={id} setInputFocus={setInputFocus} />
    </div>
  );
};
