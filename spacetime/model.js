import { Spacetime } from '@spacetimexyz/client'

const db = new Spacetime();

const metaData = {
  id: 'miller/todos',
  schema: {
    type: 'object',
    properties: {
      listId: {
        type: 'string'
      },
      listName: {
        type: 'string'
      },
      listItems: {
        type: 'string',
      }
    }
  },
  indexes: [{
    fields: [{ field: 'listId' }]
  }]
}

const createdCollection = await db.createCollection(metaData);