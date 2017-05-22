import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

export const isLogged = (nextState, replace) => {
  if (Meteor.loggingIn() && Meteor.userId()) {
    console.log('LOG IN');
    console.log(Meteor.loggingIn());
    console.log(Meteor.userId());
    console.log(nextState.location.pathname);
    replace({
      pathname: '/articles',
      state: { nextPathname: nextState.location.pathname }
    });
  } else { console.log('NO LOG IN');}
};
