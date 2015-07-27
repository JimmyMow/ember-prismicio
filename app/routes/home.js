import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      Prismic.Api('https://jackschessblog.prismic.io/api', function (err, Api) {
        // You can use the Api object inside this block
        Api.form('everything').set('page', parseInt(window.location.hash.substring(1)) || 1 ).ref(Api.data.master.ref).submit(function (err, response) {
            // The documents object contains a Response object with all documents of type "product".
            // An array containing the results of the current page;
            resolve(response.results);
        });
      });
    });
  }
});
