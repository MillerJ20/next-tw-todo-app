import { ListItem } from "./ListItem"
import { useSpacetime, useCollection, useDocument } from "@spacetimexyz/react";
import { useEffect, useState } from "react";
import { map } from 'lodash'


export const ListContainer = () => {
  const spacetime = useSpacetime()
  const { data, error, loading } = useCollection(spacetime.collection('miller/tasks'))

  const listItemArray = map(data, ({ data }) => {
    return (
      <ListItem text={data.taskText} id={data.id} key={data.id}/>
    )
  })
  

  return (
    <div className="overflow-y-auto flex flex-col items-center justify-center h-5/6 rounded-md w-1/2 shadow-md py-2">
      {listItemArray}
    </div>
  )
}