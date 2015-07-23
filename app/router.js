import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('blog', { path: '/:blog_id' }, function() {});
});

export default Router;
