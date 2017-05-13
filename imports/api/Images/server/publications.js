import { Meteor } from 'meteor/meteor';
import Images from '../images';

Meteor.publish('images.all', function () {
  return Images.find( {}, { sort: {uploaded_at: -1} } );
});
