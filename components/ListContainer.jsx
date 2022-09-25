import { ListItem } from "./ListItem"


const mockList = [
  {
    id: 1,
    text: 'This is a list item text string'
  },
  {
    id: 2,
    text: 'This is another list item text string'
  },
  {
    id: 3,
    text: 'This is the last item text string'
  }
];
const listItemArray = mockList.map((item) => {
  return <ListItem key={item.id} text={item.text} />
})

export const ListContainer = () => {
  return (
    <div className="overflow-y-auto flex flex-col items-center justify-center h-5/6">
      {listItemArray}
    </div>
  )
}