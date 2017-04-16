import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Images from '../../api/Images/images';
import ImageGrid from '../pages/ImageGrid';

export default createContainer( () => {
  Meteor.subscribe('images.all');

  const images = Images.find().fetch();

  return { residents };
}, ImageGrid);
