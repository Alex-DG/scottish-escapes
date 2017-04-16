import { Mongo } from 'meteor/mongo';
//import { SimpleSchema } from 'meteor/aldeed:collection2-core';
import SimpleSchema from 'simpl-schema';

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
  }
});

Images.attachSchema(Images.schema);
