import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Images from './images';

Meteor.methods({
  /**
   * Create new Images
   * @param { String } name - Image's name
   * @param { String } url - Image's url
   */
  'images.insert'(name, url) {
    check(name, String);
    check(url, String);

    return Images.insert({
      name,
      url
    });
  }
});
