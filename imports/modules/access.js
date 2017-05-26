import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

export const isLogged = (nextState, replace) => {
  if (Meteor.loggingIn() && Meteor.userId()) {
    replace({
      pathname: '/articles',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

export const accessAdmin = (nextState, replace) => {
  const roles = ['admin'];
  //addMiddleware(nextState, replace, '/not-found', false, roles);
  addMiddleware(nextState, replace, '/not-found', false, roles);
};

/**
 * [Restrict access to pages]
 * @param { String } pathname [Redirection's route]
 * @param { Boolean } logout [True if you want to logout the user after redirection]
 * @param { String } group [Role group to restrict access]
 */
function addMiddleware(nextState, replace, route, logout, roles) {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: route,
      state: { nextPathname: nextState.location.pathname }
    });

  } else if (Meteor.userId() && Roles.subscription.ready()){

    if (!Roles.userIsInRole(Meteor.userId(), roles)) {
      replace({
        pathname: route,
        state: { nextPathname: nextState.location.pathname }
      });

      if (logout) {
        Meteor.logout();
      }

      Bert.alert('Access Denied', 'warning');
    }
  }
}
