import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('page').then((model) => model.get("firstObject"));
  }
});
