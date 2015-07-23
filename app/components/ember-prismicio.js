import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ember-prismicio', 'title-list'],
  apiEndPoint: 'https://jackschessblog.prismic.io/api',
  content: null,

  didInsertElement: function() {
    var _this = this;
    Prismic.Api(this.get('apiEndPoint'), function (err, Api) {
      // You can use the Api object inside this block
      Api.form('everything').set('page', parseInt(window.location.hash.substring(1)) || 1 ).ref('VZ7T8yAAADgAwfXj').submit(function (err, response) {
          // The documents object contains a Response object with all documents of type "product".
          // An array containing the results of the current page;
          _this.set('content', response.results);
      });
    });
  }
});
