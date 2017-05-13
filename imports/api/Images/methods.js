import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Images from './images';

Meteor.methods({

  /**
   * @param { String } name - Image's name
   * @param { String } src - Image's url
   * @param { String } thumbnail - Image's thumbnail url
   * @param { String } caption - Image's caption
   */
  'images.insert'(name, src, thumbnail, caption) {
    check(name, String);
    check(src, String);
    check(thumbnail, String);
    check(caption, String);

    return Images.insert({
      name,
      src,
      thumbnail,
      caption,
      uploaded_at: new Date()
    });
  },

  /*
   * Delete image by ID
   */
   'images.delete'(_id) {
     check(_id, String);

     const image = Images.findOne(_id);

     if (image) {

       let bucket = Meteor.settings.private.BUCKET_S3;
       let region = Meteor.settings.private.REGION_S3;
       let accessKeyId = Meteor.settings.private.AWS_ID;
       let secretAccessKey = Meteor.settings.private.AWS_SECRET;

       let url = image.url;
       let imageURL = image.url.replace('https://' + bucket + '.' + region + '.amazonaws.com/images/1493154869496"', '');

       AWS.config.update({
         accessKeyId: accessKeyId,
         secretAccessKey: secretAccessKey,
       });

       let s3 = new AWS.S3();
       let params = {
         Bucket: bucket,
         Key: imageURL // 'images/myimage.jpg'
       };

       let deleteObject = Meteor.wrapAsync(
         s3.deleteObject(params, function (error, data) {
           if (error) {
             console.log(error);
           } else {
             console.log(data);
             Images.remove(image);
           }
         })
       );
   }
   // if (image) {
   //   return Images.remove(image);
   // }
  }

});
