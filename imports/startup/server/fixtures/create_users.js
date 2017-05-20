import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const allUsers = Meteor.users.find().count();

const users = [
  {
    username: 'alex',
    password: 'alex'
  }
];

if (allUsers <= 0) {
  users.map(({ username, password }) => {
    const userId = Accounts.createUser({ username, password });
    if (userId) {
      console.log('User created');
    } else {
      console.log('Error creating user');
    }
  });
}
