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
    label: 'Name',
    optional: true
  },

  src: {
    type: String,
    label: 'Url'
  },

  thumbnail: {
    type: String,
    label: 'Thumbnail'
  },

  caption: {
    type: String,
    label: 'Name',
    optional: true
  },

  uploaded_at: {
    type: Date,
    label: 'Uploaded At'
  }

});

Images.attachSchema(Images.schema);
