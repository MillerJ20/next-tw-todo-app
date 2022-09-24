import { ListContainer } from "../components/ListContainer";
import { ListItem } from "../components/ListItem";

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      <ListContainer>
        <ListItem />
      </ListContainer>
    </h1>
  )
}
