import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Articles from './articles';

Meteor.methods({

  'articles.insert'(title, description, location, thumbnail, images) {
    check(title, String);
    check(description, String);
    check(location, String);
    check(thumbnail, String);
    check(images, [Object]);

    return Articles.insert({
      title,
      description,
      location,
      thumbnail,
      images,
      uploaded_at: new Date()
    });
  },

});
