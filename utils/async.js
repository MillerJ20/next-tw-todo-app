import { Spacetime } from "@spacetimexyz/client";

export const getTasks = async () => {
    const spacetime = new Spacetime();
    const collectionRef = spacetime.collection('miller/tasks');
   
    const docs = await collectionRef.get();
  
    return {
      docs,
      collectionRef
    }
}


export const addTask = async (uuid, taskText) => {
  const { collectionRef } = await getTasks();

  try {
    const addedDoc = await collectionRef.doc(uuid).set({
      taskId: uuid,
      taskText
    })
    return addedDoc;
  } 
  catch (error) {
    console.error(error)
  }
}

export const deleteTask = async (taskId) => {
  const { collectionRef } = await getTasks();
  
  try {
    await collectionRef.doc(taskId).delete();
    return 
  } catch (error) {
    console.error(error);
  }
}

export const editTask = async (taskId, updatedString) => {
  const { collectionRef } = await getTasks();

  try {
    const updatedDoc = await collectionRef.doc(taskId).set({
      taskId,
      taskText: updatedString
    })
    console.log('Updated doc: ', updatedDoc)
    return updatedDoc;
  } 
  catch (error) {
    console.error('Error in edit tasks: ',error)
  }
}

// console.log('Edited task: ', await editTask('048c91e3-a7fd-45d6-bd7e-1d1173df3ca8', 'Get updated kid'))