import { MdDeleteOutline, MdDelete } from 'react-icons/md'

export const DeleteButton = () => {
  return (
    <button class="bg-gray-300 hover:bg-red-500 text-gray-800 py-2 px-4 rounded inline-flex space-x-2 items-center">
      <MdDeleteOutline fontSize="25px" />
      <span>Delete</span>
    </button>
  )
}
