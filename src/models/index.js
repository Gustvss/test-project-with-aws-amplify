// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ItemType = {
  "SHIRT": "SHIRT",
  "SHORTS": "SHORTS"
};

const { Owner, Item } = initSchema(schema);

export {
  Owner,
  Item,
  ItemType
};