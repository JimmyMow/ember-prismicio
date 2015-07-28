import Ember from 'ember';
import startApp from 'ember-prismicio/tests/helpers/start-app';
var App;

module('Integration - Secret', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('there is a blog preview on the home page', function() {
  visit('/');
  andThen(function() {
    equal(find('.post').length, 1);
  });
});

test('make sure blog show page has nav', function() {
  visit('blog.index');
  andThen(function() {
    equal(find('.nav').length, 1);
  });
});
