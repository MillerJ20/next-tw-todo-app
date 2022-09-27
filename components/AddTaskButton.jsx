import { useState } from 'react'
import { AddTaskModal } from './modal/AddTaskModal'

export const AddTaskButton = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setShow(!show)
  }

  if(show === true){
   return <AddTaskModal setShow={setShow}/>
  } else{
    return (
      <button onClick={handleClick} className="sticky bg-green-300 hover:bg-green-500 text-slate-700 my-auto py-3 px-3 hover:text-white rounded-md hover:rounded-xl rounded-3xl
        transition-all duration-200 ease-linear
        cursor-pointer shadow-lg">
          Add Task
      </button>
    )
  }
}
