import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return new Ember.RSVP.Promise(function(resolve) {
      var _this = this;
      Prismic.Api('https://jackschessblog.prismic.io/api', function (err, Api) {
        console.log("api: ", Api);
        // You can use the Api object inside this block
        Api.form('everything').set('page', parseInt(window.location.hash.substring(1)) || 1 ).ref(Api.data.master.ref).submit(function (err, response) {
            // The documents object contains a Response object with all documents of type "product".
            // An array containing the results of the current page;
            console.log('results: ', response.results);
            resolve(response.results);
        });
      });
    });
  }
});
