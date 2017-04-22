import { Slingshot } from 'meteor/edgee:slingshot';
import { Meteor } from 'meteor/meteor';

Slingshot.fileRestrictions("Uploads", {
  allowedFileTypes: null,
  maxSize: null // 2 MB (use null for unlimited)
});
Slingshot.createDirective("Uploads", Slingshot.S3Storage, {
  bucket: Meteor.settings.private.BUCKET_S3,
  acl: "public-read",
  region: Meteor.settings.private.REGION_S3,
  AWSAccessKeyId: Meteor.settings.private.AWS_ID,
  AWSSecretAccessKey: Meteor.settings.private.AWS_SECRET,
  authorize: function () {
    return true;
  },
  key: function ( file ) {
    let fileName = Date.now();
    return `images/${fileName}`;
  }
});
