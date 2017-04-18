import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Images = new Mongo.Collection('images');

export default Images;

Images.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Images.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Images.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  url: {
    type: String,
    label: 'Url'
  },
  resident_id: {
    type: String,
    label: 'id',
    optional: true
  },
  created_at: {
    type: Date,
    label: 'Created At'
  }
});

Images.attachSchema(Images.schema);
