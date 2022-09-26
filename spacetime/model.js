import { Spacetime } from '@spacetimexyz/client'

const db = new Spacetime();

const metaData = {
  id: 'miller/tasks',
  schema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'string'
      },
      taskText: {
        type: 'string'
      },
    }
  },
  indexes: [{
    fields: [{ field: 'taskId' }]
  }]
}

const createdCollection = await db.createCollection(metaData);

console.log('Results of the collection being created: ', createdCollection)