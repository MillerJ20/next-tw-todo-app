import { MdDeleteOutline } from 'react-icons/md'
import { deleteTask } from '../utils/async';

export const DeleteButton = ({id}) => {
  
  const clickHandler = async (e) => {
    e.preventDefault();

    await deleteTask(id);
  }

  return (
    <button className='button-icon-delete' onClick={clickHandler}>
      {<MdDeleteOutline />}
    </button>
  )
}
