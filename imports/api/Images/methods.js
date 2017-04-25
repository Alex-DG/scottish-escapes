import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Images from './images';

Meteor.methods({
  // TEST
  /**
   * @param { String } name - Image's name
   * @param { String } src - Image's url
   * @param { String } thumbnail - Image's thumbnail url
   * @param { String } thumbnailWidth - Image's thumbnail width
   * @param { String } thumbnailHeight - Image's thumbnail height
   * @param { String } caption - Image's caption
   */
  'images.insert'(name, src, thumbnail, thumbnailWidth, thumbnailHeight, caption) {
    check(name, String);
    check(src, String);
    check(thumbnail, String);
    check(thumbnailWidth, Number);
    check(thumbnailHeight, Number);
    check(caption, String);

    return Images.insert({
      name,
      src,
      thumbnail,
      thumbnailWidth,
      thumbnailHeight,
      caption,
      created_at: new Date()
    });
  }
});
