import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import './routes';

/**
 * Set Bert position to top-right by default
 */
Bert.defaults.style = 'growl-top-right';

/**
 * Set html title to the current app's title by default
 */
document.title = Meteor.settings.public.APP_NAME;
