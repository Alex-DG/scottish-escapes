import { Meteor } from 'meteor/meteor';
import Articles from '../articles';

Meteor.publish('articles.all', function () {
  return Articles.find( {}, { sort: {uploaded_at: -1} } );
});
