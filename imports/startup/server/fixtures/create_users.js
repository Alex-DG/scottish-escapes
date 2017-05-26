import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const allUsers = Meteor.users.find().count();

const users = [
  {
    username: 'alex',
    password: 'alex',
    roles: ['admin'],
  }
];

if (allUsers <= 0) {

  users.map(({ username, password, roles }) => {

    const userId = Accounts.createUser({ username, password, roles });
    if (userId) {
      Roles.addUsersToRoles(userId, roles);
    } else {
      console.log('Error creating user');
    }

  });

}
