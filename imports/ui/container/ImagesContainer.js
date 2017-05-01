import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import HomePage from '../pages/HomePage'
import Images from '../../api/Images/images';

export default createContainer( (props) => {

  // Subscribtion
  Meteor.subscribe('images.all');

  // Data
  const images = Images.find().fetch();

  return { images };
}, HomePage);
