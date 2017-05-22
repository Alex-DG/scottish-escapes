import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Articles from './articles';

Meteor.methods({

  'articles.insert'(title, description, location, thumbnail, images, updated_at) {
    check(title, String);
    check(description, String);
    check(location, String);
    check(thumbnail, String);
    check(images, [Object]);
    check(updated_at, Date);

    return Articles.insert({
      title,
      description,
      location,
      thumbnail,
      images,
      created_at: new Date(),
      updated_at
    });
  },

});
