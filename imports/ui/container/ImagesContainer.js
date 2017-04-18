import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import HomePage from '../pages/HomePage'
import Images from '../../api/images/images';

export default createContainer( (props) => {

  Meteor.subscribe('images.all');

  const images = Images.find().fetch();
  console.log(images);
  return { images };
}, HomePage);
