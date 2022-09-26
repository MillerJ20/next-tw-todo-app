import { DeleteButton } from "./DeleteButton"
import { EditButton } from "./EditButton"

export const ListItem = ({ text, id }) => {
  return (
    <div className="flex flex-row top-0 left-0 w-fit my-auto">
      <div className="my-auto mx-2">{text}</div>
      <DeleteButton id={id}/>
      <EditButton id={id} />    
    </div>
  )
}
