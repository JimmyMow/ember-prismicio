import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ember-prismicio', 'title-list'],
  imgUrl: function() {
    return this.get('blog') ? this.get('blog').fragments['article.illustration'].value.main.url : null;
  }.property('blog'),
  longledge: function() {
    return this.get('blog') ? this.get('blog').fragments['article.longlede'].value[0].text : null;
  }.property('blog')
});
