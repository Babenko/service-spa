import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    const authorizated = this.controllerFor("login").get("authorizated")
    this.set("authorizated", authorizated);
    if(!authorizated) {
      // this.transitionTo("login");
    }
  },

  model: function() {
    return this.store.findAll('page').then((model) => model.get("firstObject"));
  },

  setupController(currentController, model) {
    currentController.set("authorizated", this.get("authorizated"));
    currentController.set("model", model);
  }

});
