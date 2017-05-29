import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import ArticlesPage from '../pages/ArticlesPage'
import Articles from '../../api/articles/articles';

export default createContainer( (props) => {

  let articles = [];

  // Subscribtion
  Meteor.subscribe('articles.all');

  // Data
  articles = Articles.find().fetch();
  if (articles) {
    articles.map( (article) => {
      article.updated_at = moment(article.updated_at).format('DD/MM/YYYY');
      article.created_at = moment(article.created_at).format('DD/MM/YYYY');
    })
  }
  return { articles };
}, ArticlesPage);
