import { DeleteButton } from "./DeleteButton"
import { EditButton } from "./EditButton"

export const ListItem = () => {
  return (
    <div>
      <div>Item Text</div>
      <DeleteButton />
      <EditButton />    
    </div>
  )
}
