import { Meteor } from 'meteor/meteor';
import { Check } from 'meteor/check';
import Images from '../images';

Meteor.publish('images.all', function () {
  return Images.find();
});
