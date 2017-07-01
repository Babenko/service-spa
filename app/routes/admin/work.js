import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.controllerFor("admin").get("model");
  },

  actions: {
    newExample(e) {
      const examples = this.controllerFor("admin").get("model.work.examples");
      examples.pushObject({desciption:"", img:"", title:""});
    }
  }
});
