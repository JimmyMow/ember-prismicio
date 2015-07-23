import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return new Ember.RSVP.Promise(function(resolve) {
      Prismic.Api('https://jackschessblog.prismic.io/api', function (err, Api) {
        Api.form('everything').ref('VZ7T8yAAADgAwfXj').query('[[:d = at(document.id, "' + params.blog_id + '")]]').submit(function (err, docs) {
          var doc = docs.results[0];
          resolve(doc);
        });
      });
    });
  }
});
