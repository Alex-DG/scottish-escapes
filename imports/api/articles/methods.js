import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Articles from './articles';

Meteor.methods({

  'articles.insert'(title) {
    check(title, String);

    return Articles.insert({
      title,
      created_at: new Date(),
      updated_at: new Date()
    });
  },

  'articles.remove'(id) {
    check(id, String);

    const article = Articles.findOne( { _id: id } );
    if (article) {
      return Articles.remove(article);
    }
  }

});
