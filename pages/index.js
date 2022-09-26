import { ListContainer } from "../components/ListContainer";
import { useSpacetime, useCollection, useDocument } from "@spacetimexyz/react";
import { useAsyncCallback } from "@react-hooks-library/core";

export default function Home() {
  return (
    <div>
      <ListContainer />
    </div>
  )
}
