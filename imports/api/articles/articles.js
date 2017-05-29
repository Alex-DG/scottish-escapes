import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Articles = new Mongo.Collection('Articles');

export default Articles;

Articles.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Articles.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Articles.schema = new SimpleSchema({

  title: {
    type: String,
    label: 'Title',
  },

  description: {
    type: String,
    label: 'Description',
    optional: true
  },

  location: {
    type: String,
    label: 'Location',
    optional: true
  },

  thumbnail: {
    type: String,
    label: 'Thumbnail',
    optional: true
  },

  images: {
    type: [Object],
    label: 'Images',
    optional: true
  },

  created_at: {
    type: Date,
    label: 'Created At'
  },

  updated_at: {
    type: Date,
    label: 'Uploaded At'
  }

});

Articles.attachSchema(Articles.schema);
